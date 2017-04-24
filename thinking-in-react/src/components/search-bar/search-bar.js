import React from 'react';
import styles from './search-bar.css';

export default function SearchBar(props) {
  const onInputChange = event => props.onSearchInputChange(event.target.value);
  const onCheckboxChange = event => props.onInStockCheckboxChange(event.target.checked);

  return (
    <form className="searchBar">
      <input
        className="input"
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={onInputChange}
      />

      <label className="checkBoxContainer">
        <input type="checkbox" checked={props.inStockOnly} onChange={onCheckboxChange} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}
