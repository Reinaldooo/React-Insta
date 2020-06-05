import React from "react";
//
import "./styles.scss";

function Loading() {
  return (
    <div className="loader-container" data-testid="loading">
      <div className="lds-ripple">
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
