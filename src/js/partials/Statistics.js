import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Heading from 'grommet/components/Heading';
import Box  from 'grommet/components/Box';

export default class TodoAppDashboard extends Component {
  generateObject (_current) {
    let getTotal = index => {
      return this.props.questions[index].answers
      .reduce((_total,answer) => answer.votes + _total, 0); 
    }
    let _items = this.props.questions[_current].answers.map((answer, index) => {
      return  {"label": answer.title, "value": parseInt(answer.votes/getTotal(_current)*100), 
      "colorIndex": "graph-1"};
    });
    return _items;
  }
  render () {
    let createChart = function (testing) {
      if(typeof testing != 'undefined')
        return <Meter large={true} max={100} legend={{"placement": "inline"}} 
        series={this.generateObject(testing)}
        a11yTitleId="meter-title-12" a11yDescId="meter-desc-12" units="%" />;
    }.bind(this);
    let createBricks = this.props.questions.map((question, index) => {
      return  <Box colorIndex="light-1">
      <Heading tag="h3" align="center">
        {question.prompt}
      </Heading>
      <Heading tag="h3" align="center">
        {createChart(index)}
      </Heading>
      </Box>;
    });
    return (
      <Box appCentered={true} colorIndex="light-1" >
        <Heading tag="h2" align="center" margin="large">
          {this.props.currentTag}
        </Heading>
          { createBricks } 
      </Box>
    );
  }
};
