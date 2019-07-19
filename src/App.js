import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/nasa-logo.png";
import "./App.scss";
import Info from "./components/info";

function App() {
  const [imageData, setImageData] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [imgDate, setImgDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        // console.log(result.data.hdurl);
        setImage(result.data.hdurl);
        setTitle(result.data.title);
        setImgDate(result.data.date);
        setInfo(result.data.explanation);
        setImageData(result.data);
      } catch (error) {
        console.log("there was an arror");
      }
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
      <Info logo={logo} date={imgDate} title={title} />
    </div>
  );
}

export default App;
