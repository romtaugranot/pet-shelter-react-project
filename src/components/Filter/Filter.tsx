import Multiselect from 'multiselect-react-dropdown'
import React, { useState } from 'react';
import "./Filter.css"

export type Option = {
  id: number;
  option: string;
};

type FilterProps = {
  options: Option[]
  onFilterChange: (options: Option[]) => void;
};

function Filter({options,onFilterChange} : FilterProps){

  const [selectedOptions, setSelectedOptions] = useState<Option[]>(options);

  const handleSelect = (selectedList: Option[], selectedItem: Option) => {
    setSelectedOptions(selectedList);
    onFilterChange(selectedList);
  };

  const handleRemove = (selectedList: Option[], removedItem: Option) => {
    setSelectedOptions(selectedList);
    onFilterChange(selectedList);
  };

  return (
      <Multiselect 
      style={{
          searchBox: {
            border: 'none',
            'border-radius': '0.3em',
            'border-style': 'none',
            'background-color': 'white',
            'width': '10em',
            'height': '2.7em',
            'box-shadow': 'rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px'
          }, inputField: { 
              'font-size': '1.1em',
              'letter-spacing': '0.01em',
              'font-family': 'Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif'
          }
        }}
      className="multi-select"
      displayValue="option"
      hideSelectedList
      placeholder='Filter'
      onKeyPressFn={function noRefCheck(){}}
      onRemove={handleRemove}
      onSearch={function noRefCheck(){}}
      onSelect={handleSelect}
      selectedValues={selectedOptions}
      options={options}
      showCheckbox/>
    );

}

export default Filter;