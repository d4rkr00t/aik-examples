import React from 'react';

export default function ProductRow(props) {
  const name = props.product.stocked
    ? props.product.name
    : (<span style={{ color: 'red' }}>{props.product.name}</span>);

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}
