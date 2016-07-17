import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Meter from 'grommet/components/Meter';


export default class Questions extends Component {
  generateObject (_current) {
    let getTotal = index => {
      return this.props.questions[index].answers
      .reduce((_total,answer) => answer.votes + _total, 0); 
    };
    let _items = this.props.questions[_current].answers.map((answer, index) => {
      return  {"label": answer.title, "value": parseInt(answer.votes/getTotal(_current)*100), 
      "colorIndex": "grey-1"};
    });
    return _items;
  }
  render () {
    let createChart = function (testing) {
      if(typeof testing != 'undefined')
        return (
          <span>
            <Meter large={true}
              max={100}
              legend={{"placement": "inline"}} 
              series={this.generateObject(testing)}
              a11yTitleId="meter-title-12"
              a11yDescId="meter-desc-12" units="%" 
            /> 
            <Button margin="large" label="Next Question" onClick={this.props.changeQuestion}/>
          </span>
        );
    }.bind(this);
    let items = this.props.questions[this.props.currentQuestion].answers.map((answer, index) => {
      return (
        <Button key={index}  margin="large" label={answer.title} onClick={() => this.props.changeQuestion(index) }/>
      );
    });
    return (
      <Box appCentered={true}
           colorIndex="light-1"
           className="question">
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
          <strong>{this.props.questions[this.props.currentQuestion].prompt}</strong>
        </Heading>
        <Menu className='option-list' size="large" inline={true} align="center" pad={{"horizontal": "medium", "vertical": "medium", "between": "medium"}}>
          {
          this.props.showWhat
          ?items
          :createChart(this.props.currentQuestion)
          }
        </Menu>
      </Box>
    );
  }
}
