const initialState = [];

export default function arrivals(state = initialState, action) {

    switch (action.type) {
        case 'SET_ARRIVALS':
            return action.payload;

        default:
            return state;
    }

}