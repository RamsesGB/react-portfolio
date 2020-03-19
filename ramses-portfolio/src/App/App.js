import React from "react";
import "./App.css";
import Header from "../Components/header"
import ContentContainer from "../Components/contentContainer"
import Footer from "../Components/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <ContentContainer/>
      <Footer/>
    </div>
  ); 
} 


export default App;