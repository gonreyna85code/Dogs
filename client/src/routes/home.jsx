import React from "react";
import Pages from "../components/pages.jsx";
import Filter from "../components/filter.jsx";
import Navbar from "../components/navbar.jsx";
import icon from "../styles/dog-icon.png";
import "../styles/home.css";

export default function Home() { 
  
  return (
    <div className="home">
      <div  className='home_icon'>
        <a href="/create">
          <div className="home_icon_container">
          <img src={icon} alt="" className="home_algo"/>
          Create New Breed
          </div>          
        </a>
        Create New Breed
      </div>     
    <Navbar/>
      <div>        
        <div>
          <Filter /><br />
          <div>
          <Pages className="dogsList" />
        </div>
        </div>        
      </div>
      </div>
  );
}
