import React from "react";

import "./Loading.scss";

const Loading = () => (
  <div className="loader-container" data-testid="loading">
    <div className="lds-ripple">
      <div></div>
    </div>
  </div>
);

export default Loading;
