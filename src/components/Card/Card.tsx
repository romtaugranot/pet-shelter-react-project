import "./Card.css"
import dog from "../../images/dog2.jpg"
import cat from "../../images/cat2.jpg"
import { useState } from "react";
import Dialog from "../Dialog/Dialog";

export type CardProps = {
    type: string;
    name: string;
    gender: string;
    age: number;
    description: string;
}

export function Card(animal: CardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="card" onClick={handleOpenDialog}>
                <img src={animal.type.toLowerCase() === 'dog' ? dog : cat} className="animal-card"></img>
                <h3>{animal.name}</h3>
            </div>
            <Dialog isOpen={isOpen} onClose={handleCloseDialog} animal={animal}/>
        </div>
    );
}
