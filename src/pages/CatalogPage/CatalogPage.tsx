import { useState } from 'react';
import './CatalogPage.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import { CardProps, Card } from '../../components/Card/Card';
import { Option } from '../../components/Filter/Filter';
import data from '../../data.json';
import '../../styles/GoBackCatalogButton.css'
import { Link } from 'react-router-dom';

const options: Option[] = [
  {id:1, option: 'Dog'},
  {id:2, option: 'Cat'},
  {id:3, option: 'Male'},
  {id:4, option: 'Female'}
];

function CatalogPage() {
  const [searchedAnimals, setSearchedAnimals] = useState<CardProps[]>(data);
  const [filteredAnimals, setFilteredAnimals] = useState<CardProps[]>(data);

  const handleSearchChange = (searchedAnimals: CardProps[]) => {
    setSearchedAnimals(searchedAnimals);
  };

  const handleFilterChange = (filteredOptions: Option[]) => {
    const filteredOptionsOnlyString: string[] = filteredOptions.map(o => o.option.toLowerCase());
    const filteredAnimals = data.filter(animal => filteredOptionsOnlyString.includes(animal.type) 
    && filteredOptionsOnlyString.includes(animal.gender));
    setFilteredAnimals(filteredAnimals);
  };

  return (
    <div>
      <div className='search-and-filter-container'>
        <Link to="/">
          <button className='go-back-catalog-btn'>Go back</button>
        </Link>
        <SearchBar animals={data} onSearchChange={handleSearchChange} />
        <Filter options={options} onFilterChange={handleFilterChange}/>
      </div>
      <div className='cards-container'>
        {filteredAnimals.filter(value => searchedAnimals.includes(value)).map((pet, index) => (
          <Card key={index} {...pet} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
