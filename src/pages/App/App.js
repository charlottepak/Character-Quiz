import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import QuizPage from '../QuizPage/QuizPage';
import NavBar from '../../components/NavBar/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


class App extends Component {
  /*--- State ---*/
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }
    handleLogout = () => {
      userService.logout();
      this.setState({user: null});
    };
    
    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }

  /*--- Handle Methods ---*/
  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
        <QuizPage></QuizPage>
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      </div>
    );
  }






}
export default App;
