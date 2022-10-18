import React from "react";

export default function HW() {
  return (
    <div className="HW">
      <div className="H-W">
        <span className="hu">
          Humidity:<span id="humidity"> </span> %
        </span>

        <span className="windy">
          {" "}
          Wind: <span id="wind"></span> mph{" "}
        </span>
      </div>
      <br />
    </div>
  );
}
