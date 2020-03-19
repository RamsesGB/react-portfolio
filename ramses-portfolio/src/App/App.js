import React from "react";
import "./App.css";
import Header from "../Components/header"
import ContentContainer from "../Components/contentContainer"
import ContactMe from "../Components/contactMe";



function App() {
  return (
    <div className="App">
      <Header/>
      <ContentContainer/>
      <ContactMe/>
    </div>
  ); 
} 


export default App;