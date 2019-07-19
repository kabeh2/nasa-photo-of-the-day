import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import logo from "./assets/nasa-logo.png";
import "./App.scss";

function App() {
  const [imageData, setImageData] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [imgDate, setImgDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      );
      // console.log(result.data.hdurl);
      setImage(result.data.hdurl);
      setTitle(result.data.title);
      setImgDate(result.data.date);
      setInfo(result.data.explanation);
      setImageData(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("image url: " + image);
    console.log("imageData: " + JSON.stringify(imageData));
  });

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="info-container">
        <div className="info-container--content">
          <img className="logo" src={logo} alt="Nasa Logo" />
          <div className="info">
            <h1>NASA Picture of the Day</h1>
            <div className="info_title">{title}</div>
            <Moment className="info_date" format="LL">
              {imgDate}
            </Moment>
            {/* <div className="info_description">{info}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
