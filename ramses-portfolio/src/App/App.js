import React from "react";
import "./App.css";
import Header from "../Components/header"
import ContentContainer from "../Components/contentContainer"

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <ContentContainer/>
    </div>
  ); 
} 


export default App;