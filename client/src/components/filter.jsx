import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDogs,
  getByTemps,
  getDes,
  getWeights,
  getAbc,
  getDbc,
  getTemps,
} from "../redux/actions.js";

export default function Filter() {
  const dispatch = useDispatch();
  const temps = useSelector((state) => state.Temps);
  const change = (e) =>
    e.target.value === ""
      ? dispatch(getDogs())
      : dispatch(getByTemps(e.target.value));
  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className="filter">      
      <button className="filtros" type="submit" onClick={() => dispatch(getAbc())}>
        Order By Name
      </button>
      <button className="filtros" type="submit" onClick={() => dispatch(getWeights())}>
        Order By Weight
      </button>
      <button className="filtros" type="submit" onClick={() => dispatch(getDbc())}>
        Database Dogs
      </button>
      <button className="filtros" type="submit" onClick={() => dispatch(getDes())}>
        Order ↑↓
      </button> 
      <select  className="filtros" onClick={change} defaultValue="">
        <option key="0" value="" disabled hidden>
        &nbsp;&nbsp;SELECT TEMPERAMENT:
        </option>
        <option key="01" value="">
          All
        </option>
        {temps.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>     
    </div>
  );
}
