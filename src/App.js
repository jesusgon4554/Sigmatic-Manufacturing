import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

// react Bootstrap Navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "./assets/Darklogo.png";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import QualityPolicy from "./Pages/QualityPolicy";
import SalesMarketing from "./Pages/SalesMarketing";
import Facility from "./Pages/Facility";
import Safety from "./Pages/Safety";

//Components
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

//css
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <img
        src={Logo}
        width="200"
        height="200"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
        <Navbar.Brand href="/" >Sigmatic Manufacturing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link exact={true} className="nav-link" href="/">Home</Nav.Link>
            <Nav.Link exact={true} className="nav-link" href="/About">About Us</Nav.Link>
            <Nav.Link exact={true} className="nav-link" href="/QualityPolicy">Quality Policy</Nav.Link>
            <Nav.Link exact={true} className="nav-link" href="/SalesMarketing">Sales/Marketing</Nav.Link>
            <Nav.Link exact={true} className="nav-link" href="/Facility">Facility</Nav.Link>
            <Nav.Link exact={true} className="nav-link" href="/Safety">Safety</Nav.Link>
            <Nav.Link exact={true} className="nav-link" href="/Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Quality" component={QualityPolicy}></Route>
      <Route path="/QalesandMarketing" component={SalesMarketing}></Route>
      <Route path="/Facility" component={Facility}></Route>
      <Route path="/Safety" component={Safety}></Route>
      <Route path="/Contact" component={Contact}></Route>
      </BrowserRouter>

      
      
      <div class="footer">
      <Footer />
      </div>
    </div>
    
   
  );
  
}


export default App;
