import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditPostPage extends Component {
  state = {
    invalidForm: false,
    // formData: this.props.location.state.post,
    formData: {
      character: "",
      comments: "",
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdatePost(this.state.formData);
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

  render() {
    return (
      <>
        <h1>Edit Post</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div>
            <label>Character</label>
            <input
              name="character"
              value={this.state.formData.character}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Comments</label>
            <input
              name="comments"
              value={this.state.formData.comments}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" disabled={this.state.invalidForm}>
            Save Post
          </button>
          &nbsp;&nbsp;
          <Link to="/postlist">CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditPostPage;
