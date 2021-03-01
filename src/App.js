import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import List from "./components/List/List";
import Under from './components/Under/Under';

const App = () => {
  return (
    <div>
      <Header /> 
      {/* home menu line*/}
      <Item /> 
      {/* left navigation menu x4*/}
      <List /> 
      {/* car big statement */}
      <Under /> 
      {/* car small statement */}
    </div>
  );
};

export default App;
