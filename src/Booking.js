import React from 'react';
import semanticStyle from 'semantic-ui-css/semantic.min.css';
import './App.css';
// import { NavLink } from 'react-router-dom';

// import logo_pemimpin from '../../image/Logo.png';
import { Container, Divider } from 'semantic-ui-react';
import Iframe from 'react-iframe';

function Booking() {
  return (
    <div className="web-container">
      {/* Pages Header */}
      <div className="pages-header">
        <div className="pages-header_header">
          <div className="pages-header_content">
            Booking DeepSpace
          </div>
        </div>
      </div>

      <div style={semanticStyle}>
        <Container text style={{margin:"1em"}} textAlign='left'>
          <h2>Jadwal Pemakaian Tempat DeepSpace</h2>
          <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FJakarta&amp;src=cGNwNjgzMzlvY3FvbnM5NGg0Ympwc2JzY2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=MW1wdnUxbzZnOWcxcGplZHZkZDNpbzNycGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dXI2M2huNGJwYjcyam03dWloZ2pzZnZ2Nm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cjRzanI1OWpncjc3NmZnZHRubWRiMGhqMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aWQuaW5kb25lc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23AD1457&amp;color=%23C0CA33&amp;color=%23E67C73&amp;color=%23D81B60&amp;color=%230B8043&amp;showTz=1&amp;showCalendars=1&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0"
            width="100%"
            height="600px"
            id="myId"
            className="Iframe"
            display="initial"
            position="relative"
            frameBorder="0"
          />
          <b>Note  :</b>
          <p>
            Jam Operasional DeepSpace
            <ul>
              <li>
                Weekday   : 08.00 - 20.00
              </li>
              <li>
                Weekend   : 08.00 - 17.00
              </li>
            </ul>
          </p>

          <Divider/>
          <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLScVrE-I_srxOu19hYGYq5IqFQVPwJzz2E1RlO4eZy2CEkkK-g/viewform?embedded=true"
            width="100%"
            height="600vh"
            id="myId"
            className="Iframe"
            display="initial"
            position="relative"
            frameBorder="0"
          />
        </Container>
      </div>
    </div>
  );
}

export default Booking;