import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Info = props => {
  //   console.log("Date: " + props.date);
  return (
    <div className="info-container">
      <div className="info-container--content">
        <img className="logo" src={props.logo} alt="Nasa Logo" />
        <div className="info">
          <h1>NASA {props.mediaType} of the Day</h1>
          <div className="info_title">{props.title}</div>

          <DatePicker
            dateFormat="eeee MMMM d, yyyy"
            // dateFormat="yyyy-MM-d"
            selected={props.startDate}
            onChange={props.handleChange}
            // below used to filter/disable all future dates
            filterDate={date => {
              return new Date() > date;
            }}
            placeholderText={props.date}
            className="datePicker"
            value={props.startDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
