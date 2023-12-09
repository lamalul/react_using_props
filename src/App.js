//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
// import { Component } from 'react';


//https://www.freecodecamp.org/news/how-to-use-props-in-reactjs/
//https://chat.openai.com/share/cd4c1d38-7195-4b3f-9431-a34e39ad1c4e
//https://www.coursera.org/learn/react-basics/lecture/Bj28Z/using-props-in-components


function App() {
  return (
    <div className="App">
      <div className="App-header"> <Header name="Lama" color="red" /></div>

     <div className="content-container">
      <div className="main"> <Main productNumber="2" greeting="Huhu"/> </div>
      <div className="sidebar"> <Sidebar greeting="Hi"/></div>
     
     </div>

    </div>
  );
}

export default App;