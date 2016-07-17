import React, { Component } from 'react';
//GROMMET
import Section from 'grommet/components/Section';
import Image from 'grommet/components/Image';
import Brick from 'grommet/components/Brick';
import Bricks from 'grommet/components/Bricks';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Header';
import SocialFB from 'grommet/components/icons/base/SocialFacebook';
import SocialGoogle from 'grommet/components/icons/base/SocialGoogle';
//OAUTH
import FacebookLogin from 'react-facebook-login';
 

export default class Landing extends Component {
  render () {
    return (
      <Section primary={true}>
        <div className="center">
          <Image src="http://graphwhy.org/images/logo.png" />
          <Heading tag="h2" align="center" className='primaryTitle'>
            GraphWhy
          </Heading>
          <Heading tag="h4" align="center" className='secondaryTitle'>
            &nbsp;&nbsp;&nbsp;Create Statistical Understanding
          </Heading>
          <br/><br/>
          <Bricks>
            <div className="text-center">
              <FacebookLogin
              className='c-black-outline'
              appId="956433697784115"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.props.loginFacebook}>
              <Brick 
                  label="Facebook" 
                  colorIndex="neutral-4"
                  texture={<SocialFB/>}
                  appId="956433697784115"
                  autoLoad={true}
                  fields="name,email,picture"
                  onClick={() => this.props.loginFacebook()}/>
              </FacebookLogin>
              <br/><br/>
              <Button 
                  className='c-black-outline'
                  label="MANUAL SIGN IN" 
                  colorIndex="ok"
                  texture={<SocialGoogle/>}
                  onClick={() => this.props.changePage('menu')}/>
            </div>
          </Bricks>
        </div>
      </Section>
    );
  }
};
