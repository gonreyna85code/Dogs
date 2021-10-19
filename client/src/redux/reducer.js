import {
  GET_DOGS,
  GET_DOG,
  GET_DES,
  GET_BY_TEMPS,
  GET_TEMPS,
  GET_WEIGHTS,
  GET_SEARCH,
  GET_ABC,
  GET_DBC,
} from "./actions.js";

const initialState = {
  Dogs: [],
  Dog: [],
  Temps: [],
  Filtrados: [],
  Post:[]
};

function rootReducer(state = initialState, action) {
  
  if (action.type === GET_DOGS) {
    function dbid(dog) {
      if (dog.db_created === "true") {
        dog.id = dog.id + "db";
      }
      return dog;
    }
    return {
      ...state,
      Dogs: action.payload.filter((d) => d.temperament !== undefined).map(dbid),
      Filtrados: action.payload.filter((d) => d.temperament !== undefined).map(dbid)
    };
  }
  if (action.type === GET_DOG) {
    return {
      ...state,
      Dog: action.payload,
    };
  }
  if (action.type === GET_DES) {
    return {
      ...state,
      Filtrados: [...state.Filtrados].reverse(),
    };
  }
  if (action.type === GET_BY_TEMPS) {
    return {
      ...state,
      Filtrados: [...state.Dogs].filter((d) =>
        d.temperament.includes(action.payload)
      ),
    };
  }
  if (action.type === GET_TEMPS) {
    const temps = action.payload.filter((d) => d.name !== "");
    return {
      ...state,
      Temps: temps,
    };
  }
  if (action.type === GET_ABC) {
    return {
      ...state,
      Filtrados: [...state.Filtrados].sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    };
  }
  if (action.type === GET_SEARCH) {
    var val = action.payload.split(' ').filter(e => e !== '');
    var regex = new RegExp(val, 'ig')
    return {
      ...state,
      Filtrados: [...state.Dogs].filter((d) => d.name.match(regex)),
    };
  }
  if (action.type === GET_DBC) {
    function dbc(dog) {
      if (dog.db_created === "true") {
        return dog;
      }
    }
    return {
      ...state,
      Filtrados: [...state.Filtrados].filter(dbc),
    };
  }
  if (action.type === GET_WEIGHTS) {
    const dog = [...state.Filtrados].sort(function (a, b) {
      if (
        parseInt(a.weight.imperial.split(' - ')) >
        parseInt(b.weight.imperial.split(' - '))
      ) {
        return -1;
      }
      if (
        parseInt(b.weight.imperial.split(' - ')) >
        parseInt(a.weight.imperial.split(' - '))
      ) {
        return 1;
      }
      return 0;
    })
    return {
      ...state,
      Filtrados: dog,
    };
  }
  return state;
}

export default rootReducer;
