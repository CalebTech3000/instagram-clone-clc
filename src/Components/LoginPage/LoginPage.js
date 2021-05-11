import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/images/9364675fb26a.svg';
import inst_logo from '../../images/images/logoinsta.png';
import fb from '../../images/images/fb.png';
import appstore from '../../images/images/app.png';
import playstore from '../../images/images/play.png';

import './LoginPage.css';
import SignIN from '../SignIn/SignIN';
import SignUp from '../SignUp/SignUp';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }

  changeLogin = () => {
    if (this.state.isLogin)
      this.setState({ isLogin: false });
    else
      this.setState({ isLogin: true });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className='loginpage__main'>
              <div>
                <img src={inst_image} alt="" width='454px' />
              </div>
              <div>
                <div className='loginpage__rightcomponent'>
                  <img className='loginpage__logo' src={inst_logo} alt="" />
                  <div className='loginpage__signin'>
                    
                    {
                      this.state.isLogin ? <SignIN /> : <SignUp />
                    }

                    <div className='login__ordiv'>
                      <div className='login__divider'></div>
                      <div className='login__or'>OR</div>
                      <div className='login__divider'></div>
                    </div>

                    <div className='login__fb'>
                      <img src={fb} alt="" width='15px' style={{ "marginRight":"5px" }} />Log in with Facebook
                    </div>
                    <div className='login__forgot'>Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {
                    this.state.isLogin ?
                    <div className='loginPage__signin'>
                      Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395f6" }}>Sign up</span>
                    </div> :
                    <div className='loginPage__signup'>
                      Have an account. <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395f6" }}>Sign in</span> 
                    </div>
                  }
                </div>

                <div className='loginPage__downloadSection'>
                  <div>
                    Get the app.
                  </div>
                  <div className='loginPage__option'>
                    <img className='loginPage__dwimg' src={appstore} alt="" width='136px' />
                    <img className='loginPage__dwimg' src={playstore} alt="" width='136px' />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
