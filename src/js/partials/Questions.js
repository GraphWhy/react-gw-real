import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';


export default class TodoAppDashboard extends Component {
  render () {
    let items = this.props.questions[this.props.currentQuestion].answers.map((answer, index) => {
      return (
        <Button key={index} accent={true} margin="large" label={answer.title} onClick={this.props.changeQuestion}/>
      );
    });
    return (
      <Box appCentered={true} colorIndex="light-1" >
      <Header justify="between">
        <Title>
          {this.props.currentQuestion+1} / {this.props.questions.length}
        </Title>
        <Menu direction="row" align="center" responsive={false}>
          <Anchor>
            {this.props.currentTag}
          </Anchor>
        </Menu>
      </Header>
        <Heading tag="h2" align="center" margin="large">
          {this.props.questions[this.props.currentQuestion].prompt}
        </Heading>
        <Menu size="large" inline={true} align="center" pad={{"horizontal": "medium", "vertical": "medium", "between": "medium"}}>
          { items }
        </Menu>
      </Box>
    );
  }
};

