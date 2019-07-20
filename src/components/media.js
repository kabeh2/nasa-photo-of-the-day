import React from "react";

const Media = props => {
  const a = `${props.media}?rel=0&amp;autoplay=1&amp;enable_js=1&amp;mute=0`;
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
