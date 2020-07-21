import React, { Component } from "react";
import "./App.css";
import userService from "../../utils/userService";
import NavBar from "../../components/NavBar/NavBar";
import { Route, Redirect } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import quizQuestions from "../../api/quizQuestions";
import Quiz from "../../components/Quiz/Quiz";
import Result from "../../components/Result/Result";
import AddPostPage from "../AddPostPage/AddPostPage";
import PostsListPage from "../PostListPage/PostListPage";
import EditPostPage from "../EditPostPage/EditPostPage";
import * as postAPI from "../../utils/postService";

class App extends Component {
  /*--- State ---*/
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      posts: [],

      user: userService.getUser(),
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  async componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      this.shuffleArray(question.answers)
    );
    const posts = await postAPI.index();
    this.setState({
      posts: posts,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  handleAddPost = async (newPostData) => {
    const newPost = await postAPI.create(newPostData);
    this.setState(
      (state) => ({
        posts: [...state.posts, newPost],
      }),
      this.props.history.push("/postlist")
    );
  };

  handleDeletePost = async (id) => {
    await postAPI.deleteOne(id);
    this.setState(
      (state) => ({
        posts: state.posts.filter((i) => i._id !== id),
      }),
      () => this.props.history.push("/postlist")
    );
  };

  handleUpdatePost = async (updatePostData, id) => {
    console.log('hitting')
    const updatePost = await postAPI.update(updatePostData, id);
    console.log(updatePost);
    const newPostArray = this.state.posts.map((i) =>
      i._id === updatePost._id ? updatePost : i
    );
    this.setState({ posts: newPostArray }, () =>
      this.props.history.push("/postlist")
      );
  };

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({
        result: result[Math.floor(Math.random() * result.length)],
      });
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="page-header">
          <h2>Character Quiz</h2>
        </div>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/postlist"
          render={(history) => (
            <PostsListPage
              user={this.state.user}
              posts={this.state.posts}
              handleDeletePost={this.handleDeletePost}
            />
          )}
        />
        <Route
          exact
          path="/addpost"
          render={() =>
            userService.getUser() ? (
              <AddPostPage handleAddPost={this.handleAddPost} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/edit"
          render={({ location }) => (
            <EditPostPage
              handleUpdatePost={this.handleUpdatePost}
              location={location}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() =>
            this.state.result ? this.renderResult() : this.renderQuiz()
          }
        />
      </div>
    );
  }
}
export default App;
