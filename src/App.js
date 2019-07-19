import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/nasa-logo.png";
import "./App.scss";
import Info from "./components/info";
import Media from "./components/media";

function App() {
  const [imageData, setImageData] = useState([]);
  const [media, setMedia] = useState("");
  const [mediaHD, setMediaHD] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [imgDate, setImgDate] = useState("");
  const [mediaType, setMediaType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        // console.log(result.data.hdurl);
        setMediaHD(result.data.hdurl);
        setMedia(result.data.url);
        setTitle(result.data.title);
        setImgDate(result.data.date);
        setInfo(result.data.explanation);
        setImageData(result.data);
        setMediaType(result.media_type);
      } catch (error) {
        console.log("there was an arror");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("image url: " + media);
    console.log("imageData: " + JSON.stringify(imageData));
  });

  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url(${image})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat"
      // }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-99",
          width: "100vw",
          height: "100vh"
        }}
      >
        <Media
          media={media}
          mediaHD={mediaHD}
          mediaType={mediaType}
          title={title}
        />
      </div>
      <Info logo={logo} date={imgDate} title={title} info={info} />
    </div>
  );
}

export default App;
