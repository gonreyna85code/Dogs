import React from "react";
import "../styles/home.css";

export default function DogCard(props) {
  const { Titulo, Imagen } = props;
  return (
    <div className="card">      
        <img className='card_image' width={100} src={Imagen} alt="No imagen" />
        <span className='card_title'>{Titulo}</span>      
    </div>
  );
}
