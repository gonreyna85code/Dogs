import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();
  const [input, setinput] = useState('')
  function Change(e) {
    setinput(e.target.value);   
    getSearch(input);
  }
  useEffect(() => {
    dispatch(getSearch(input));
  }, [dispatch, input]);
  return (
    <nav>
      <div className="navbar">
        <input type="search" onChange={Change} id="header-search" placeholder="  Search Breeds" />        
      </div>
    </nav>
  );
}


//<input className='search_home'  type="submit" value="Search" onChange={e => change()} onClick={change} />