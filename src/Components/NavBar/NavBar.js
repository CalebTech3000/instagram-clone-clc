import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './NavBar.css';
import { Grid } from '@material-ui/core';
import inst_logo from '../../images/images/logoinsta.png';
import home from '../../images/images/home.svg';
import message from '../../images/images/message.svg';
import find from '../../images/images/find.svg';
import react from '../../images/images/love.svg';
import pp from '../../images/images/pp1.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img className='navbar__logo' src={inst_logo} alt="" width='105px' />
            </Grid>
            <Grid item xs={3}>
              <input type="text" placeholder='Search' />
            </Grid>
            <Grid item xs={3} style={{ "display": "flex" }}>
              <img className='navbar__img' src={home} alt="" width='25px' />
              <img className='navbar__img' src={message} alt="" width='25px' />
              <img className='navbar__img' src={find} alt="" width='25px' />
              <img className='navbar__img' src={react} alt="" width='25px' />
              <Avatar src={pp} />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

export default NavBar;