import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_DES = "GET_DES";
export const GET_BY_TEMPS = "GET_BY_TEMPS";
export const GET_TEMPS = "GET_TEMPS";
export const GET_WEIGHTS = "GET_WEIGHTS";
export const GET_SEARCH = "GET_SEARCH";
export const GET_ABC = "GET_ABC";
export const POST_BREED = "POST_BREED";
export const GET_DBC = "GET_DBC";

export function getDogs() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/breeds");
      return dispatch({ type: "GET_DOGS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getDog(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({ type: "GET_DOG", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTemps() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/temps");
      return dispatch({ type: "GET_TEMPS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getSearch(params) {
  return { type: "GET_SEARCH", payload: params };
}
export function getDes() {
  return { type: "GET_DES" };
}
export function getDbc() {
  return { type: "GET_DBC" };
}
export function getByTemps(temps) {
  return { type: "GET_BY_TEMPS", payload: temps };
}
export function getWeights() {
  return { type: "GET_WEIGHTS" };
}
export function getAbc() {
  return { type: "GET_ABC" };
}
export function postBreed(breed) {
  
    return async function (dispatch) {
      try {
        if(breed !== ''){await axios.post("http://localhost:3001/breed", breed)};
      } catch (error) {
        console.log(error);
      }
    };
  
}
