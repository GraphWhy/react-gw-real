import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Image from 'grommet/components/Image';
import Brick from 'grommet/components/Brick';
import Bricks from 'grommet/components/Bricks';
import SocialFB from 'grommet/components/icons/base/SocialFacebook';
import SocialGoogle from 'grommet/components/icons/base/SocialGoogle';
import SocialLinkedIn from 'grommet/components/icons/base/SocialLinkedin';
import SocialTwitter from 'grommet/components/icons/base/SocialTwitter';
import FacebookLogin from 'react-facebook-login';
 

export default class Landing extends Component {
  render () {
    return (
      <Section primary={true}>
        <Image src="http://graphwhy.org/images/logo.png" />
        <Bricks>
          <Brick 
              label="Twitter" 
              colorIndex="neutral-3"
              texture={<SocialTwitter/>} />
          <Brick 
              label="Google" 
              colorIndex="ok"
              texture={<SocialGoogle/>} />
          <Brick 
              label="SocialLinkedIn" 
              colorIndex="accent-2"
              texture={<SocialLinkedIn/>} 
              onClick={() => this.props.changePage('menu')}/>
          <FacebookLogin
          appId="956433697784115"
          autoLoad={true}
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
        </Bricks>
      </Section>
    );
  }
};
