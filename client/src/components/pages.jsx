import React, { useEffect, useState } from "react";
import DogCard from "./card.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dogs() {
  const dogs = useSelector((state) => state.Filtrados);
  const [currentPage, setCurrentPage] = useState(0);

  const next_Page = () => {
    if (dogs.length <= currentPage + 8) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 8);
  };
  const prev_Page = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 8);
    }
  };
  const first_Page = () => {
    setCurrentPage(0);
  };
  const last_Page = () => {
    setCurrentPage(dogs.length - 8);
  };
  useEffect(() => {
    first_Page();
  }, [dogs]);

  const dogs_list = dogs.slice(currentPage, currentPage + 8);
  return (
    <div>
      <div className="cards">
        {dogs_list.map((e) => (
          <Link key={e.id} to={"/dog/" + e.id}>
            <DogCard Titulo={e.name} Imagen={e.image.url} />
          </Link>
        ))}
      </div>    
      <div className='pager_container'> 
      <button className="pager" onClick={first_Page}>
        First Page
      </button>
      &nbsp;
      <button className="pager" onClick={prev_Page}>
        Prev Page
      </button>
      &nbsp;
      <button className="pager" onClick={next_Page}>
        Next Page
      </button>
      &nbsp;
      <button className="pager" onClick={last_Page}>
        Last Page
      </button>
      </div> 
    </div>
  );
}
