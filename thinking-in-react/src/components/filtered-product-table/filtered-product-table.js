import React from "react";
import SearchBar from "../search-bar/search-bar";
import ProductTable from "../product-table/product-table";

export default class FilterableProductTable extends React.Component {
  state = {
    filterText: "",
    inStockOnly: false
  };

  updateFilterText = filterText => {
    this.setState({
      filterText: filterText
    });
  };

  updateInStockOnly = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly
    });
  };

  render() {
    const products = this.props.products.filter(
      product =>
        product.name
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1 &&
        ((this.state.inStockOnly && product.stocked) || !this.state.inStockOnly)
    );

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onSearchInputChange={this.updateFilterText}
          onInStockCheckboxChange={this.updateInStockOnly}
        />
        <ProductTable
          products={products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
