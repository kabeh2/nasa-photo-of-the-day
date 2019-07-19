import React from "react";

const Media = props => {
  return (
    <div>
      {props.media_type === "video" ? (
        <iframe
          width="100vw"
          height="100vh"
          src={props.media}
          frameborder="0"
          allowfullscreen
          title={props.title}
        />
      ) : (
        <img src={props.media} className="background-media" alt={props.title} />
      )}
    </div>
  );
};

export default Media;
