import '../scss/index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
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
      currentTag: 'Smart City',
      questions: 
      [
        {
          prompt: 'How green is a tree?',
          answers: [
            {
              title: 'Somewhat green',
              votes: 2
            },
            {
              title: 'Very green',
              votes: 5
            },
            {
              title: 'Not green',
              votes: 7
            },
            {
              title: 'trees are brown',
              votes: 1
            }
          ]
        },
        {
          prompt: 'Is trump a viable candidate',
          answers: [
            {
              title: 'Yes',
              votes: 1
            },
            {
              title: 'No',
              votes: 1
            },
            {
              title: 'Better than Hillary',
              votes: 4
            },
            {
              title: 'Fuck Trump',
              votes: 8
            }
          ]
        },
        {
          prompt: 'How green is a apple?',
          answers: [
            {
              title: 'Somewhat blue',
              votes: 1
            },
            {
              title: 'Very red',
              votes: 2
            },
            {
              title: 'Not orange',
              votes: 3
            },
            {
              title: 'oranges are orange',
              votes: 5
            }
          ]
        }
      ],
      currentQuestion: 0
    };
    this.changePage = this.changePage.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.resetVote = this.resetVote.bind(this);
    Rest.get('http://echo.jsontest.com/insert-key-here/insert-value-here/key/value').then(result => console.log(result));
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
    switch( this.state.currentPage ){
      case 'menu':
        return <Menu changePage={this.changePage} />
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
    return (
      <App centered={false} >
        { this.state.currentPage != 'landing' ? <Header justify="between" colorIndex="neutral-1" pad={{"horizontal": "medium"}}>
          <Title onClick={ () => this.changePage('menu') }>GraphWhy</Title>
          </Header> : null }
        { this.routeHandler() }
      </App>
    );
  }
}

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
