import React from "react";
import "./style.css";

const styles = {
  headline: {
    textAlign: "center",
    paddingBottom: 15,
  },
};

function GameHeader() {
  return (
    <header className="header">
      <h1 style={styles.headline}>High Score Musical</h1>
    </header>
  );
}

export default GameHeader;
