import React from 'react';

export default function SearchBar(props) {
  const onInputChange = event => props.onSearchInputChange(event.target.value);
  const onCheckboxChange = event => props.onInStockCheckboxChange(event.target.checked);

  return (
    <form>
      <input type="text" placeholder="Search..." value={props.filterText} onChange={onInputChange} />
      <p>
        <input type="checkbox" checked={props.inStockOnly} onChange={onCheckboxChange} />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}
