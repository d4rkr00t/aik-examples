import React from 'react';
import ProductRow from './product-row';
import ProductCategoryRow from './product-category-row';
import styles from './product-table.css';

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
    <div className={styles.productTable}>
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
