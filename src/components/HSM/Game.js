import React from "react";
import "./style.css";

function Game() {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "40%",
        paddingTop: 30,
        height: 30,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          paddingRight: 40,
          paddingLeft: 40,
        }}
        src={`https://i.simmer.io/@michaelwitt/high-score-musical-test`}
        frameBorder="0"
      />
    </div>
  );
}

export default Game;
