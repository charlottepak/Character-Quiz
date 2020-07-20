  
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditPostPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.post
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePost(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1 className="blue-grey darken-2 white-text">Edit Post</h1>
        <form className="blue-grey darken-2 white-text" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="white-text">Character</label>
            <input
              className="form-control white-text"
              name="character"
              value={this.state.formData.character}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group white-text">
            <label className="white-text">Comments</label>
            <input
              className="form-control white-text"
              name="comments"
              value={this.state.formData.comments}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Save Post
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditPostPage;