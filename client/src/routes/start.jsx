import React from "react";
import "../styles/start.css";

export default function Start() {
  return (
    <div  className="start">
      <div className="title">
        <h1>Welcome to <br/> the Dog App</h1>
      </div>
      <div>
        <form action="/home" >
          <input type="submit" value="Start" className="button"/>
        </form>
      </div>
    </div>
  );
}
