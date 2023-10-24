import { Link, useLocation } from 'react-router-dom';
import { CardProps } from '../../components/Card/Card'; 
import dog from "../../images/dog2.jpg"
import cat from "../../images/cat2.jpg"
import "./AdoptionPage.css"
import AdoptionForm from '../../components/AdoptionForm/AdoptionForm';
import '../../styles/GoBackAdoptionButton.css'

function AdoptionPage() {
  const location = useLocation();
  const animal: CardProps = location.state as CardProps; 

  if (!animal) {
    // Handle the case when there is no state passed
    return <div>No animal information found!</div>;
  }

  return (
    <div className='adoption-page-container'>
      <div className='upper-adoption-page-container'>
        <Link to="/Catalog">
          <button className='go-back-adoption-btn'>Go back</button>
        </Link>
      </div>
      <div className='lower-adoption-page-container'>
        <div className='adoption-form-container'>
          <AdoptionForm/>
        </div>
        <div className='animal-details-container'>
          <img src={animal.type.toLowerCase() === 'dog' ? dog : cat} className="animal-card-adoption"></img>
          <div className="animal-text-adoption-card">
            <div className="left-animal-text-adoption-card">
              <h2>{animal.name}</h2>
            </div>
            <div className="right-animal-text-adoption-card">
              <h3>{animal.gender}</h3>
              <h3>{animal.age} years old</h3>
            </div>
          </div>
        </div >
      </div>
    </div>
  );
}

export default AdoptionPage;
