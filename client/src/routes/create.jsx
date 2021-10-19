import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemps, postBreed } from "../redux/actions.js";
import { useHistory } from "react-router-dom";
import icon from "../styles/icon2.jpg";
import dog from "../styles/dog.jpg";
import "../styles/create.css";

export default function Create() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [Name, setName] = useState("");
  const [Height1, setHeight1] = useState("");
  const [Height2, setHeight2] = useState("");
  const [Weight1, setWeight1] = useState("");
  const [Weight2, setWeight2] = useState("");
  const [Life1, setLife1] = useState("");
  const [Life2, setLife2] = useState("");
  const [Breed, setBreed] = useState("");
  var [Selected, setSelected] = useState([]);
  const temps = useSelector((state) => state.Temps);
  function change(e) {
    setSelected((Selected) => Selected.concat(e.target.value));
  }
  function submit(e) {    
    setBreed({
      name: Name.charAt(0).toUpperCase() + Name.slice(1),
      height: {
        imperial: Height1 + " - " + Height2,
      },
      weight: {
        imperial: Weight1 + " - " + Weight2,
      },
      life_span: Life1 + "-" + Life2,
      temperament: Selected.join(", "),
      image: {
        url: dog,
      },
      db_created: true,
    }); 
    console.log(Breed);
    dispatch(postBreed(Breed));
    alert("Breed created successfully");  
  }
  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch]);
  useEffect(() => {
    dispatch(postBreed(Breed));
  }, [dispatch, Breed]);
  return (
    <div className="create">
      <div>
        <a href="/home" className="icon">
          <div>
            <img src={icon} alt="" className="img" />
          </div>
        </a>
      </div>
      <h1 className="create_title">Create New Breed</h1>
      <form id="form" className="create_container" action='/home' onSubmit={submit}>
        <div className="text_box">
          <div className="field">
            <label>Name:&nbsp;</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Height:&nbsp;</label>
            <input
              type="number"
              id="height1"
              name="height1"
              required
              onChange={(e) => setHeight1(e.target.value)}
            />
            &nbsp;-&nbsp;
            <input
              type="number"
              id="height2"
              name="height2"
              required
              onChange={(e) => setHeight2(e.target.value)}
            />
            &nbsp;Centimeters.
          </div>
          <div className="field">
            <label>Weight:&nbsp;</label>
            <input
              type="number"
              id="weight1"
              name="weight1"
              required
              onChange={(e) => setWeight1(e.target.value)}
            />
            &nbsp;-&nbsp;
            <input
              type="number"
              id="weight2"
              name="weight2"
              required
              onChange={(e) => setWeight2(e.target.value)}
            />
            &nbsp;Kilograms.
          </div>
          <div className="field">
            <label>Life span:&nbsp;</label>
            <input
              type="number"
              id="life1"
              name="life1"
              required
              onChange={(e) => setLife1(e.target.value)}
            />
            &nbsp;-&nbsp;
            <input
              type="number"
              id="life2"
              name="life2"
              required
              onChange={(e) => setLife2(e.target.value)}
            />
            &nbsp;Years.
          </div>
        </div>
        <br />
        <div className="check_box">
          <label>Temperaments:</label>
          <br />

          <select id="temps" multiple size="6" required onClick={change}>
            {temps.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <br />
          <label className="multi">(use Ctrl for multiple selection)</label>
        </div>
        <div>
          <input
            type="submit"
            value="Create"
            className="create_button"
          />
        </div>
      </form>
    </div>
  );
}
