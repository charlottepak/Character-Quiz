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
ßß
  render() {
    return (
      <>
        <h1>Share result</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label className="white-text">Your character</label>
            <input
              name="character"
              value={this.state.formData.character}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="white-text">Comments</label>
            <input
              name="comments"
              value={this.state.formData.comments}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Share
          </button>
        </form>
      </>
    );
  }
}

export default AddPostPage;
