import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.cancat([action.payload.data]);

      //ES6 way
      return [action.payload.data, ...state]

      //never do
      //return state.push(action...)
      //this mutates original state wich is wrong
      //we never mutate it, we return new instance of it
  }
  return state
}
