import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Heading from 'grommet/components/Heading';
import Box  from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Bricks  from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';
import ChartThomas from '../components/chartThomas';

export default class Stats extends Component {
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
        <h2> {prompt}
        </h2>
      );
    }; 
    let createBricks = this.props.questions.map((question, index) => {
      return (  
        <div className="pin-box" >
          {createPrompt(question.prompt)}
          {createChart(index)}
        </div>
      );
    });
    return (

        <div className="pin-wrapper">
          <div className='pin-box' colorIndex="neutral-6">
            <Heading tag="h2" align="center" margin="large">
              <strong>{this.props.currentTag}</strong>
            </Heading>
          </div>
          {createBricks} 
        </div>
    );
  }
};
