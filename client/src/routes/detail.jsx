import React, { useEffect } from "react";
import { getDog } from "../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import "../styles/detail.css";
import icon from "../styles/icon2.jpg";

export default function Detail(props) {
  const id = props.match.params.id;
  const dog = useSelector((state) => state.Dog);
  console.log(dog)
  const image = dog.image?.url;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDog(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="detail">
      <div>
        <a href="/home"  className='detail_icon'>
          <div>
          <img src={icon} alt="" className="detail_img"/>
          </div>
        </a>
      </div>
        <h1 className="detail_title">{dog.name}</h1>
        <div className="img_container">
          <img className="det_img" src={image} width={400} alt="" />
        </div>
        <div className="foot">
          <li>Height: {dog.height?.imperial} centimeters</li>
          <li>Weight: {dog.weight?.imperial} kilograms</li>
          <li>Temperament: {dog.temperament}</li>
          <li>Life span: {dog.life_span}</li>
          <li>Bred for: {dog.bred_for}</li>
        </div>
      </div>
    </div>
  );
}
