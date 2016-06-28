import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import LoginForm from 'grommet/components/LoginForm';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';

export default class Landing extends Component {
  render () {
    return (
      <Section primary={true}>
        <LoginForm
          logo={<Image src="http://graphwhy.org/images/logo.png" />}
          title="GraphWhy"
          secondaryText="Building statistical understanding"
          onClick={ () => this.props.changePage('menu') }
        />
        <Button label="Skip to Menu" primary={true} onClick={ () => this.props.changePage('menu') } />
      </Section>
    );
  }
};
