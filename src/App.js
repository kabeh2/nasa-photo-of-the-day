import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import logo from "./assets/nasa-logo.png";
import "./App.scss";
import Info from "./components/info";
import Media from "./components/media";
import CircularIndeterminate from "./components/loader";

function App() {
  const [loading, setLoading] = useState(false);
  // const [imageData, setImageData] = useState([]);
  const [media, setMedia] = useState("");
  const [mediaHD, setMediaHD] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [imgDate, setImgDate] = useState("");
  const [mediaType, setMediaType] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [newDate, setNewDate] = useState("");

  const handleChange = date => {
    const a = moment(date).format("YYYY-MM-DD");

    setStartDate(date);
    setNewDate(a);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await axios.get("https://api.nasa.gov/planetary/apod", {
          params: {
            date: newDate,
            api_key: "n86JVNah2R4q3KSYXeHnpMhvqDX9adH4cRMGrRgR"
          }
        });
        setLoading(false);
        setMediaHD(result.data.hdurl);
        setMedia(result.data.url);
        setTitle(result.data.title);
        setImgDate(result.data.date);
        setInfo(result.data.explanation);
        // setImageData(result.data);
        setMediaType(result.data.media_type);
      } catch (error) {
        console.log("there was an error");
      }
    };

    fetchData();
  }, [newDate]);

  // useEffect(() => {
  //   console.log("image url: " + media);
  //   console.log("imageData: " + JSON.stringify(imageData));

  //   console.log("Date new 1: " + newDate);
  // });

  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "1",
          width: "100vw",
          height: "100vh"
        }}
      >
        {loading ? (
          <CircularIndeterminate />
        ) : (
          <Media
            media={media}
            mediaHD={mediaHD}
            mediaType={mediaType}
            title={title}
          />
        )}
        {/* <Media
          media={media}
          mediaHD={mediaHD}
          mediaType={mediaType}
          title={title}
        /> */}
      </div>
      <Info
        logo={logo}
        date={imgDate}
        title={title}
        info={info}
        handleChange={handleChange}
        startDate={startDate}
        mediaType={mediaType}
      />
    </div>
  );
}

export default App;
