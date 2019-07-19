import React from "react";
import Moment from "react-moment";

const Info = props => {
  return (
    <div className="info-container">
      <div className="info-container--content">
        <img className="logo" src={props.logo} alt="Nasa Logo" />
        <div className="info">
          <h1>NASA Picture of the Day</h1>
          <div className="info_title">{props.title}</div>
          <Moment className="info_date" format="LL">
            {props.imgDate}
          </Moment>
          {/* <div className="info_description">{info}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Info;
