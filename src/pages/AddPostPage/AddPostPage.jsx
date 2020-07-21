import React, { Component } from "react";

class AddPostPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      character: "",
      comments: "",
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddPost(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };
  ßß;
  render() {
    return (
      <>
        <h1>Share result</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <br></br>
          <div>
            <label>Your character: </label>
            <input
              name="character"
              value={this.state.formData.character}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Comments: </label>
            <input
              name="comments"
              value={this.state.formData.comments}
              onChange={this.handleChange}
              required
            />
          </div>
          <br></br>
          <button className="btn btn-default" type="submit" disabled={this.state.invalidForm}>
            Share
          </button>
        </form>
      </>
    );
  }
}

export default AddPostPage;
