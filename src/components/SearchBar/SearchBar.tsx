import { useState } from "react";
import { CardProps } from "../Card/Card";
import "./SearchBar.css"

type SearchBarProps = {
  animals: CardProps[];
  onSearchChange: (filteredAnimals: CardProps[]) => void;
};

export function SearchBar({animals, onSearchChange} : SearchBarProps){
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredAnimals, setFilteredAnimals] = useState<CardProps[]>(animals);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    setSearchInput(inputValue);
    const filteredAnimals: CardProps[] = animals.filter((animal) => (animal.name.toLowerCase().includes(inputValue.toLowerCase())
    || animal.gender.toLowerCase().startsWith(inputValue.toLowerCase()) || ("" + animal.age + " years old").includes(inputValue.toLowerCase())));
    setFilteredAnimals(filteredAnimals);
    onSearchChange(filteredAnimals);
  };

  


  return (
    <div>
      <input 
        className='search'
        type="search"
        placeholder="Search pet"
        onChange={handleChange}
        value={searchInput}/>
    </div>
  );
};