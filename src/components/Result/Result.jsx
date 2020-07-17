import React from "react";
import PropTypes from "prop-types";
import ShareButton from "../../components/ShareButton/ShareButton"

function Result(props) {
  return (
    <div className="result">
      You got <strong>{props.quizResult}</strong>!
      <br></br>
        <ShareButton handleShareClick={props.handleShareClick}/>
        {/* <Link to='/settings'>Share your results</Link> */}
    </div>
  );
}



Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
