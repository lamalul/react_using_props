//import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
// import { Component } from 'react';
import productsData from process.env.PUBLIC_URL + '/data.json'; 
/* function App() {
  return (
    <div className="App">
      <Product
  img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
  name="Cyxus"
  desc="Non-Slip Fitness Leisure Running Sneakers"
  price="$29"
/>
    </div>
  );
} */

function App() {
  return (
    <div className="App">
      {productsData.map((product, index) => (
        <Product
          key={index}
          img={product.img}
          name={product.name}
          desc={product.desc}
          price={product.price}
        />
      ))}
    </div>
  );
}


export default App;
