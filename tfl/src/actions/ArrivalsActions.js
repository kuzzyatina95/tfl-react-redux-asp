import axios from 'axios'

//const API_URL = 'https://api-radon.tfl.gov.uk/Line/64/Arrivals';

export function setArrivals(id) {
    const API_URL = `https://api-radon.tfl.gov.uk/Line/${id}/Arrivals`;
    return (dispatch) => {
        axios.get(API_URL)
            .then((response) => {
                dispatch({
                    type: 'SET_ARRIVALS',
                    payload: response.data
                })
            })
    }
}