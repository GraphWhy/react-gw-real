import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import LoginForm from 'grommet/components/LoginForm';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import SocialShare from 'grommet/components/icons/base/SocialFacebook';

export default class Landing extends Component {
  render () {
    return (
      <Section primary={true}>
        <div className="center">
          <LoginForm
            logo={<Image src="http://graphwhy.org/images/logo.png" />}
            title="GraphWhy"
            className="no-bottom-padding"
            secondaryText="Building statistical understanding"
            onSubmit={() => this.props.changePage('menu')}
            forgotPassword={<Button 
              className="button login-form__submit button--primary"
              icon={<SocialShare/>}
              label="SIGN IN WITH FACEBOOK" 
              primary={true} 
              onClick={() => this.props.changePage('menu')} 
            >
            </Button>}
          />
          
        </div>
      </Section>
    );
  }
};

