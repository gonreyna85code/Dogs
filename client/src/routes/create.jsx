import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemps, postBreed } from "../redux/actions.js";
import icon from "../styles/icon2.jpg";
import dog from "../styles/dog.jpg";
import "../styles/create.css";

export default function Create() {
  const dispatch = useDispatch();
  const temps = useSelector((state) => state.Temps);
  function submit(e) {
    const t = document.getElementById("temps").selectedOptions;
    const Breed = {
      name:
        e.target.name.value.charAt(0).toUpperCase() +
        e.target.name.value.slice(1),
      height: {
        imperial: e.target.height1.value + " - " + e.target.height2.value,
      },
      weight: {
        imperial: e.target.weight1.value + " - " + e.target.weight2.value,
      },
      life_span: e.target.life1.value + "-" + e.target.life2.value,
      temperament: Array.from(t)
        .map(({ value }) => value)
        .join(", "),
      image: {
        url: dog,
      },
      db_created: true,
    };

    dispatch(postBreed(Breed));
    alert("Breed created successfully")
  }
  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch]);

  return (
    <div className="create" onSubmit={submit}>
      <div>
        <a href="/home"  className='icon'>
          <div>
          <img src={icon} alt="" className="img"/>
          </div>
        </a>
      </div>
      <h1 className="create_title">Create New Breed</h1>
      <form id="form" action="/home" className="create_container">
        <div className="text_box">
          <div className='field'>
            <label>Name:&nbsp;</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className='field'>
          <label >Height:&nbsp;</label>
          <input type="number" id="height1" name="height1" required />&nbsp;-&nbsp;
          <input type="number" id="height2" name="height2" required />
          &nbsp;Centimeters.
          </div>
          <div className='field'>
          <label>Weight:&nbsp;</label>
          <input type="number" id="weight1" name="weight1" required />&nbsp;-&nbsp;
          <input type="number" id="weight2" name="weight2" required />
          &nbsp;Kilograms.
          </div>
          <div className='field'>
          <label>Life span:&nbsp;</label>
          <input type="number" id="life1" name="life1" required />&nbsp;-&nbsp;
          <input type="number" id="life2" name="life2" required />
          &nbsp;Years.
          </div>
        </div>
        <br />
        <div className="check_box">
          <label>Temperaments:</label>
          <br />
          
          <select id="temps" multiple size="6" required >
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
          <input type="submit" value="Create" className="create_button" />
        </div>
      </form>
    </div>
  );
}
