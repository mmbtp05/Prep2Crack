import { ACHIEVEMENT } from "../actions/homeActions";
import { TESTIMONIALS } from "../actions/homeActions";


const initialstate = {
    achievement: null,
    testimonials: null
}


export const homeStuff = (state = initialstate, action) => {
    switch (action.type) {
        case ACHIEVEMENT:
            return {
                ...state,
                achievement: action.payload
            }
        case TESTIMONIALS:
            return {
                ...state,
                testimonials: action.payload
            }
        default:
            return state;
    }
}