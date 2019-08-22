import React, { useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

import logo_pemimpin from '../image/Logo.png';
import { Button, Dimmer, Menu } from 'semantic-ui-react';

const initialState = {
  active: false, 
  activePage:''
}

function Navbar() {
  const [ state, setState ] = useState(initialState);

  const menuOpen = () => setState({ ...state, active: true })
  const menuClose = () => setState({ ...state, active: false })
  const handleItemClick = (e, { name }) => {
    setState({ ...state, activePage: name })
  }

  const { active, activePage } = state

  return (
    <header className="navigation-container_grid">
      <div className="logo-container">
        <div className="logo-container_container">
          <a href="http://www.pemimpin.id">
            <img src={logo_pemimpin} alt="Pemimpin.co" className="app-logo"/>
          </a>
          {/* <NavLink exact to="pemimpin.id">
          </NavLink> */}
        </div>
      </div>
      {/*This is the function to Show the Menu Page*/}
        <div className="menu_container">
          <NavLink className="navigation_item" exact to="/">Home</NavLink>
          <NavLink className="navigation_item" exact to="/booking">Booking</NavLink>
          <div className="menu_button">
          <Button icon='align justify' inverted color='red' onClick={menuOpen} />
            <Dimmer active={active} onClickOutside={menuClose} page>
              <Menu size='massive' inverted secondary vertical>
              <Menu.Item
                  className="menu_item"
                  as={NavLink}
                  name='Home'
                  active={activePage === 'home'}
                  onClick={handleItemClick}
                  exact to='/'
                />
                <Menu.Item
                  className="menu_item"
                  as={NavLink}
                  name='Booking'
                  active={activePage === 'booking'}
                  onClick={handleItemClick}
                  exact to='/booking'
                />
              </Menu>
            </Dimmer>
          </div>
        </div>
    </header>
  );
}

export default Navbar;