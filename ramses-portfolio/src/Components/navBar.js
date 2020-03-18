import React, { Component } from "react";
import NavBarItem from './navBarItem';
import "../App/App.css"

class NavBar extends Component {
  constructor(props) {
    super();
    /* The section-top values are stored here */
    this.sections = {
      Projects: null,
      Skills: null,
      "Contact Me": null
    }
    this.state = {
      activeMenuItem: {
        top: '',
        Section1: '', //Projects
        Section2: '', //Skills 
        Section3: '' // Contact me
      }
    }
  }

  handleScroll() {
    const curPos = window.scrollY;
    let curSection = null;
    if(curPos > this.sections.Section3) {
      curSection = 'section3';
    } else if(curPos > this.sections.Section2) {
      curSection = 'section2';
    } else if(curPos > this.sections.Section1) {
      curSection = 'section1';
    } else {
      curSection = 'top';
    }
    
    if(this.state.activeMenuItem[curSection] !== "active") {            
      const newMenuState = {
        top: '',
        Section1: '',
        Section2: '',
        Section3: ''
      }
      newMenuState[curSection] = "active";
      this.setState({ activeMenuItem: newMenuState });
    }
  }

  getAnchorPoints() {
    /* What is the current scroll depth of the page */
    const curScroll = window.scrollY;
    /* Iterate over each of our sections */
    for(var key in this.sections) {
    /* Get the pixel location of the top of the element. 
    Because getBoundingClientRect() adjusts bases on scroll depth, 
    we need to add curScroll to our result to get the actual pixel depth from the top of the page */       
      this.sections[key] = document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
    
    /* Get the pixel height of the viewport */
    
    const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    /* Get the pixel-depth of the bottom of the page */
    
    const bottom = document.body.offsetHeight;
    
    /* If max-scroll is less than the pixel-depth of Section 3, then adjust the pixel-depth of Section 3 to be 50px higher than max scroll depth ... allowing it to be an active destination */
    
    if(viewPortHeight > (bottom - this.sections.Section3)) {
      this.sections.Section3 = bottom - viewPortHeight - 50;
    }
    this.handleScroll();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    
    /* When window resizes, get new scroll-depth positions of anchors */
    
    window.addEventListener('resize', this.getAnchorPoints.bind(this));
  }

  componentDidUpdate() {
    if(this.props.dataLoaded) {
      this.getAnchorPoints();
    }
  }

  render() {
    const menuItems = [];
    for(var key in this.sections) {
      menuItems.push(<NavBarItem itemName={key} active={this.state.activeMenuItem[key]} />);
    }
    return (
      <nav id="nav">
        <ul className="Nav-Bar">
          {menuItems}
        </ul>
      </nav>
    );
  }
}

export default NavBar;