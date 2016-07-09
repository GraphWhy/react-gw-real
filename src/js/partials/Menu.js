import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';


//sorry I took out  your line
//      testing facebook oauth hello {this.props.name}


export default class Menu extends Component {
  

  render () {
    return (
      <Section primary={true} inline={false}>
        <Bricks>
          <Brick label="Smart City" 
                 colorIndex="neutral-2"
                 texture="http://static.nextbigwhat.com/wp-content/uploads/2015/01/smartcity.jpg"
                 onClick={() => this.props.changePage('questions')}
          />
          <Brick label="CCP(coming soon)" 
                 colorIndex="neutral-6" 
                 onClick={() => this.props.changePage('bquestions')}
          />
          <Brick label="Students of Bernie Sanders(coming soon)" colorIndex="neutral-6" />
          <Brick label="Green Peace(coming soon)" colorIndex="neutral-6" />
        </Bricks>
      </Section>
    );
  }
};
