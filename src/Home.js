import React from 'react';
// import semanticStyle from 'semantic-ui-css/semantic.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';

// import logo_pemimpin from '../../image/Logo.png';
// import { Container, Divider } from 'semantic-ui-react';
// import Iframe from 'react-iframe';

function Home() {
  return (

  <div className="web-container">

    <Navbar />

    <div className="inner_web-container">
      {/* Header Section */}
      <div className="heroshot-section">
        <div className="top-details">
          <h2
            className="top-header"
            style={{fontFamily:"Ubuntu", fontWeight:"bold", marginTop:15, marginBottom:15}}
          >
            YOUNG INNOVATORS FELLOWSHIP
          </h2>
          <h2
          className="top-desc"
          style={{fontFamily:"Ubuntu", fontSize:"2.4em", marginTop:15, marginBottom:15}}
          >
            Indonesia want You !
          </h2>
          <p
            className="top-p"
            style={{marginTop:15, marginBottom:15}}
          >
            Young Innovators Fellowship merupakan program akselerasi inovasi kepemimpinan yang terintegrasi bagi pemimpin muda yang berasal dari kampus di seluruh Indonesia.
          </p>
          <button className="cta-button" onClick={<NavLink className="navigation_item" exact to="/booking">Booking</NavLink>}>
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;