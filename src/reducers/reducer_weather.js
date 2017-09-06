import { FETCH_WEATHER } from '../actions/index';
export default function (state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state];  // add cities to existing state
            // previous line is identical with state.concat ([action.payload.data])
            // multipile cities we need an array 
            // never mutate ur state by using push isntead use concat or the spread operator
    }
    return state;
}
