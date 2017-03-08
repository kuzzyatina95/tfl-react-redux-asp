import axios from 'axios'

// const API_URL = 'https://api.tfl.gov.uk/Journey/JourneyResults/51.532073974609375%2C-0.1780758947134018/to/51.50557327270508%2C-0.15058399736881256';

export function getJourneys(fromLat,fromLng,toLat,toLng) {
    const API_URL = `https://api.tfl.gov.uk/Journey/JourneyResults/${fromLat}%2C${fromLng}/to/${toLat}%2C${toLng}`;
    console.log(API_URL);
    return (dispatch) => {
        axios.get(API_URL)
            .then((response) => {
                dispatch({
                    type: 'GET_JOURNEYS',
                    payload: response.data
                })
            })
    }
}