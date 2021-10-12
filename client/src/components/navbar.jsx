import React from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();
  function change() {
    const t = document.getElementById("header-search").value;
    dispatch(getSearch(t));
  }
  return (
    <nav>
      <div className="navbar">
        <input type="search" onChange={e => change()} id="header-search" placeholder="  Search Breeds" />
        
      </div>
    </nav>
  );
}


//<input className='search_home'  type="submit" value="Search" onChange={e => change()} onClick={change} />