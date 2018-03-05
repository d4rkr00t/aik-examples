// @flow
import "./style.css";
import React from "react";
import FilterableProductTable from "./components/filtered-product-table/filtered-product-table";
import data from "./data.json";

export default function App(): mixed {
  return <FilterableProductTable products={data} />;
}
