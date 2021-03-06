import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

// function App() {
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts = (event) => {
    //implement
    const sort = event.target.value;

    console.log(sort);

    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "lowest" ? ((a.price > b.price) ? 1 : -1 ) :
        sort === "highest" ? ((a.price < b.price) ? 1 : -1 ) :
        (a._id < b._id) ? 1 : -1
      )),
    }));
  };


  filterProducts = (event) => {
    //implement
    console.log(event.target.value);

    if (event.target.value === "") {
      this.setState({
        size: event.target.value, 
        products: data.products
      });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0),
      });
    }    
  };
  
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              cart items
            </div>
          </div>

        </main>
        <footer>
          <span className="credit">All right is reserved to <a href="https://www.nubeala.com">Nubeala.com</a></span>
        </footer>
      </div>
    )
  }
}

export default App
