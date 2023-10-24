import React, { FC, MouseEvent } from 'react';
import './Dialog.css';
import { CardProps } from '../Card/Card';
import dog from "../../images/dog2.jpg";
import cat from "../../images/cat2.jpg";
import '../../styles/AdoptionButton.css';
import { Link } from 'react-router-dom';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  animal: CardProps;
}

const Dialog: FC<DialogProps> = ({ isOpen, onClose, animal }) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`dialog-overlay ${isOpen ? 'open' : ''}`} onClick={handleBackdropClick}>
      <div className="dialog-content">
        <img src={animal.type.toLowerCase() === 'dog' ? dog : cat} className="animal-card-in-dialog" alt={animal.name} />
        <div className="adoption-text-container">
          <div className="upper-adoption-text-container">
            <div className="upper-left-adoption-text-container">
              <h2>{animal.name}</h2>
            </div>
            <div className="upper-right-adoption-text-container">
              <h3>{animal.gender}</h3>
              <h3>{animal.age} years old</h3>
            </div>
          </div>
          <div className="divider" />
          <div className="description-adoption-text-container">
            <p>{animal.description}</p>
          </div>
          <div className="divider" />
          <nav>
            <Link to="/Adoption" state={animal} style={{ textDecoration: 'none', color: 'rgb(108, 108, 108)' }}>
              <div className="adoption-btn-container">
                Adopt me!
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
