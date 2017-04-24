import React from 'react';
import ProductRow from 'components/product-row/product-row';
import ProductCategoryRow from 'components/product-category-row/product-category-row';
import './product-table.css';

export default function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  props.products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
