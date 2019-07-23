import React from "react";

const Media = props => {
  // below used to attach params to embedded youtube video
  // with autoplay
  const a = `${props.media}?rel=0&amp;autoplay=1&amp;enable_js=1&amp;mute=0`;

  // Below used to switch from image to video render
  return (
    <div>
      {props.mediaType === "image" ? (
        <img
          src={props.mediaHD}
          className="background-media"
          alt={props.title}
        />
      ) : (
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          name="youtube embed"
          allow="autoplay; encrypted-media"
          type="text/html"
          src={a}
          title={props.title}
          frameBorder="0"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Media;
