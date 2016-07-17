import '../scss/index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// GROMMET COMPONENTS
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import GrommetMenu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Rest from 'grommet/utils/Rest';
// THE COMPONENT-PARTIALS
import Menu from './partials/Menu';
import Questions from './partials/Questions';
import bQuestions from './partials/bQuestions';
import Statistics from './partials/Statistics';
import Landing from './partials/Landing';
import AboutUs from './partials/AboutUs';

class Main extends Component {
  constructor () {
    super();
    this.state = {
      currentPage: 'landing',
      currentTag: '',
      questions: [],
      currentQuestion: 0,
      name: '',
      showWhat: true,
      history: []
    };
    this.changePage = this.changePage.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.resetVote = this.resetVote.bind(this);
    this.LoginOauth = this.LoginOauth.bind(this);
    this.changeShow = this.changeShow.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.fetchData();
  }
  
  fetchData(){
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
          answers:answers,
          _id:questions[i]._id
        });
      }
      let currentstate = result.body.tag;
      this.setState({questions:arr});
      this.setState({currentTag:currentstate});
    })
  }
  
  LoginOauth (response) {
    let api = 'http://107.170.248.208:3010/api/user/socialLogin';
    let provider = 'facebook';
    response.access_token = response.accessToken;
    Rest.post(api,{token: response, social: provider}).then(result => {
      console.log(response);
      if(result.body.data.login) {
        this.setState({name:response.name});
        this.changePage('menu');
      }
    });
  }
  
  
  changePage ( route ) {
    let newState = this.state;
    newState.currentPage = route;
    /* FOR DEV PURPOSE*/
    if(route == 'questions')
      newState.currentQuestion = 0;
    /* FOR DEV PURPOSE*/
    this.setState(newState);
  }
  
  changeQuestion ( questionIndex ) {
    this.voteQuestion( this.state.questions[this.state.currentQuestion]._id, questionIndex)
    let newState = this.state;
    newState.history.push(questionIndex)
    if(this.state.currentQuestion == this.state.questions.length-1) {
      this.fetchData();
      this.changePage('statistics');
    }else{
      newState.currentQuestion++;
      newState.showWhat = true;
      this.setState(newState);
    }
  }
  resetVote () {
    let newState = this.state;
    newState.currentQuestion = 0;
    this.setState(newState);
  }

  changeShow () {
    this.setState({showWhat:!this.state.showWhat});
  }

  voteQuestion (questionID, voteIndex) {
    let api = 'http://107.170.248.208:3010/api/question/vote/' + questionID + '/' + voteIndex;
    Rest.get(api).then(result => {
      console.log('voted')
      console.log(result)
    })
  }

  routeHandler ( route ) {
    switch ( this.state.currentPage ) {
      case 'menu':
        return <Menu changePage={this.changePage} name={this.state.name} />;
        break;
      case 'statistics':
        return <Statistics currentTag={this.state.currentTag} questions={this.state.questions} currentQuestion={this.state.currentQuestion} history={this.state.history} />;
        break;
      case 'questions':
        return <Questions currentTag={this.state.currentTag} questions={this.state.questions} changeQuestion={this.changeQuestion} currentQuestion={this.state.currentQuestion} changeShow={this.changeShow} showWhat={this.state.showWhat} />;
        break;
      case 'bquestions':
        return <bQuestions currentTag={this.state.currentTag} questions={this.state.questions} currentQuestion={this.state.currentQuestion} changeQuestion={this.changeQuestion} />;
        break;
      case 'landing':
        return <Landing changePage={this.changePage} loginFacebook={this.LoginOauth} />;
        break;
      case 'aboutus':
        return <AboutUs />;
        break;
      default:
        return <Landing changePage={this.changePage} />;
    }
  }
  
  render () {
    let createHeader = function() {
      return (
            <Header justify="between" colorIndex="neutral-6" pad={{"horizontal": "medium"}}>
              <Title onClick={() => this.changePage('menu')}>GraphWhy</Title>
              <GrommetMenu inline={false}>
                <Anchor 
                  onClick={() => this.changePage('landing')} 
                  className="active"
                >
                  Log Out
                </Anchor>
                <Anchor 
                  onClick={() => this.changePage('aboutus')}
                  className="active"
                >
                  About Us
                </Anchor>
              </GrommetMenu>
            </Header>
      );
    }.bind(this);
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
