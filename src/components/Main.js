//import logo from './logo.svg';
import '../App.css';
import Product from './Product';
// import { Component } from 'react';
import data from '../data.json';

//https://www.freecodecamp.org/news/how-to-use-props-in-reactjs/
//https://chat.openai.com/share/cd4c1d38-7195-4b3f-9431-a34e39ad1c4e
//https://www.coursera.org/learn/react-basics/lecture/Bj28Z/using-props-in-components



//Solution 1
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

//Solution 2

function Main(props) {
  console.log(props)
  console.log(data.slice(props.productNumber))
  return (
    <div className="App">
        <h1>{props.greeting} from the Main</h1>
        <div className="product-list">
        {data.slice(0,props.productNumber).map((product) => (
            <div className='product'>  
            <Product
            id={product.id}
            img={product.img}
            name={product.name}
            desc={product.desc}
            price={product.price}
          />
          </div>
     
      ))}
            
        </div>

    </div>
  );
}

//Solution3

/* function App() {

  const products = [];
  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    products.push(
      <Product
        id={product.id}
        img={product.img}
        name={product.name}
        desc={product.desc}
        price={product.price}
      />
    );
  }

  return (
    <div className="App">
      {products}
    </div>
  );
} */

/* //Solution 4
function App() {

  const products = [];
  data.forEach((product) => {
    products.push(
      <Product
        id={product.id}
        img={product.img}
        name={product.name}
        desc={product.desc}
        price={product.price}
      />
    );
  });

  return (
    <div className="App">
      {products}
    </div>
  );
} */

//Solution 5
/* function App(props) {

  const filteredProducts = data.filter((product) => product.name === props.name);
  const renderedProducts = filteredProducts.map((product) => (
    <Product
      key={product.id}
      img={product.img}
      name={product.name}
      desc={product.desc}
      price={product.price}
    />
  ));

  return (
    <div className="App">
      {renderedProducts}
    </div>
  );
} */
export default Main;