import React from "react";
import "./Time.css";

export default function Time(props) {
  return (
    <div className="current-date">
      <h2>
        {" "}
        Last Updated: {props.day} {props.time}{" "}
      </h2>
    </div>
  );
}
