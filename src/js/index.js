import '../scss/index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from './partials/Menu';
import Questions from './partials/Questions';
import Statistics from './partials/Statistics';
import Landing from './partials/Landing';
import Rest from 'grommet/utils/Rest';

class Main extends Component {
  constructor () {
    super();
    this.state = {
      currentPage: 'landing',
      currentTag: '',
      questions: [],
      currentQuestion: 0
    };
    this.changePage = this.changePage.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.resetVote = this.resetVote.bind(this);
    Rest.get('http://107.170.248.208:3010/api/tag/questions/575cdcde681681f04d9bd9e0').then(result => {
      let arr = [];
      let questions = result.body.questions;
      for(let i = 0; i < questions.length; i++) {
        var answers = [];
        for(let v = 0; v < questions[i].answers.length; v++) {
          answers.push({
            title:questions[i].answers[v].title,
            votes:questions[i].answers[v].votes
          });
        }
        arr.push({
          prompt:questions[i].prompt,
          answers:answers
        });
      }
      let currentstate = result.body.tag;

      this.setState({questions:arr});
      this.setState({currentTag:currentstate});
    });
  }
  
  changePage ( route ) {
    var newState = this.state;
    newState.currentPage = route;
    /* FOR DEV PURPOSE*/
    if(route == 'questions')
      newState.currentQuestion = 0;
    /* FOR DEV PURPOSE*/
    this.setState(newState);
  }
  
  changeQuestion ( questionIndex ) {
    if(this.state.currentQuestion == this.state.questions.length-1) {
      this.changePage('statistics');
    }else{
      var newState = this.state;
      newState.currentQuestion++;
      this.setState(newState);
    }
  }
  resetVote () {
    var newState = this.state;
    newState.currentQuestion = 0;
    this.setState(newState);
  }
  
  routeHandler ( route ) {
    switch ( this.state.currentPage ) {
      case 'menu':
        return <Menu changePage={this.changePage} />;
        break;
      case 'statistics':
        return <Statistics currentTag={this.state.currentTag} questions={this.state.questions} currentQuestion={this.state.currentQuestion} />;
        break;
      case 'questions':
        return <Questions currentTag={this.state.currentTag} questions={this.state.questions} currentQuestion={this.state.currentQuestion} changeQuestion={this.changeQuestion} />;
        break;
      case 'landing':
        return <Landing changePage={this.changePage} />;
        break;
      default:
        return <Landing changePage={this.changePage} />;
    }
  }
  
  render () {
    let createHeader = function(){
      return <Header justify="between" colorIndex="neutral-6" pad={{"horizontal": "medium"}}>
              <Title onClick={() => this.changePage('menu')}>GraphWhy</Title>
            </Header>;
    }.bind(this)
    return (
      <App centered={false} >
        {this.state.currentPage != 'landing' ? createHeader(): null}

          <main>
            {this.routeHandler()}
          </main>
          
      </App>
    );
  }
}

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
