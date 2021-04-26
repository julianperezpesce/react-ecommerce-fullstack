import React from 'react';
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

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products 
                products={this.state.products}
              />
            </div>
            <div className="sidebar">
              cart items
            </div>
          </div>

        </main>
        <footer>
          <span>All right is reserved to <a href="https://www.nubeala.com">Nubeala</a></span>
        </footer>
      </div>
    )
  }
}

export default App