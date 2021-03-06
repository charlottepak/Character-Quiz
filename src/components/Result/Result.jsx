import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Result(props) {
  return (
    <div className="result">
      You got <strong>{props.quizResult}</strong>!<br></br>
      <Link className="btn btn-default" to='/addpost'>Share your results</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
