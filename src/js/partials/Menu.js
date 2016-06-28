import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';

export default class Menu extends Component {
  

  render () {
    return (
      <Section primary={true} inline={false}>
        <Bricks>
          <Brick label="Smart City" colorIndex="neutral-2" onClick={() => this.props.changePage('questions')}/>
          <Brick label="CCP(coming soon)" colorIndex="neutral-1" />
          <Brick label="Students of Bernie Sanders(coming soon)" colorIndex="neutral-1" />
          <Brick label="Green Peace(coming soon)" colorIndex="neutral-1" />
        </Bricks>
      </Section>
    );
  }
};
