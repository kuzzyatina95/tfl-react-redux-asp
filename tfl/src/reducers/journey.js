const initialState = {
    journeys: [
        {
            legs: [
                {
                    mode: {
                        name: ''
                    },
                    instruction: {
                        steps: [

                        ]
                    },
                    stopPoints: []
                }
            ]
        }
    ]
}
export default function journeys(state = initialState, action) {
    switch (action.type) {
        case 'GET_JOURNEYS':
            return action.payload;
        default:
            return state;
    }

}