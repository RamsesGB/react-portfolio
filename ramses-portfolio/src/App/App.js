import React from "react";
import "./App.css";
import Header from "../Components/Header/header"
import ContentContainer from "../Components/ContentContainer/contentContainer"
import ContactMe from "../Components/ContactMe/contactMe";



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