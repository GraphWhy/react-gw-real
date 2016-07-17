import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

export default class Stats extends Component {
  generateObject (_current) {
    let getTotal = index => {
      return this.props.questions[index].answers
      .reduce((_total,answer) => answer.votes + _total, 0); 
    };
    let _items = this.props.questions[_current].answers.map((answer, index) => {
      return  {"label": answer.title, "value": parseInt(answer.votes/getTotal(_current)*100), 
      "colorIndex": (this.props.history[_current]==index?'graph-1':'grey-1')};
    });
    return _items;
  }
  render () {
    let createChart = function (testing) {
      if(typeof testing != 'undefined')
        return (
            <Meter large={true}
                   max={100}
                   legend={{"placement": "inline"}} 
                   series={this.generateObject(testing)}
                   a11yTitleId="meter-title-12"
                   a11yDescId="meter-desc-12" units="%" 
            /> 
        );
    }.bind(this);
    let createPrompt = function (prompt) {
      return (
        <h3> 
          {prompt}
        </h3>
      );
    }; 
    let createBricks = this.props.questions.map((question, index) => {
      return (  
        <Box appCentered={true}
          colorIndex={index%2==0?'light-1':'light-2'}>
        <Heading tag="h2" align="center" margin="large">
          <strong>{question.prompt}</strong>
        </Heading>
        <Menu className='option-list' size="large" inline={true} align="center" pad={{"horizontal": "medium", "vertical": "medium", "between": "medium"}}>
          {createChart(index)}
        </Menu>
      </Box>
      );
    });
    return (
      <Box appCentered={true}
           colorIndex="light-1"
           className="question">
        <Heading tag="h2" align="center" margin="large">
          <strong>{this.props.currentTag}</strong>
        </Heading>
        {createBricks}
      </Box>
    );
  }
};

