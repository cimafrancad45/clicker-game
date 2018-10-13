import React from "react";

//passes the job icons to the page
const JobCard = props => (
  <div className="job-icon" onClick={props.imageClick}>
    <div>
      <img className="job-icon" alt={props.image} src={require("../../images/" + props.image)} />
    </div>
  </div>

);

export default JobCard;