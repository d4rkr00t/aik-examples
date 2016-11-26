import React from 'react';
import FilterableProductTable from 'components/filtered-product-table/filtered-product-table';
import data from './data.json';

export default function App() {
  return (
    <FilterableProductTable products={data} />
  );
}
