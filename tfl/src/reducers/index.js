import { combineReducers } from 'redux'
import { routerReducer  } from 'react-router-redux'
import arrivals from './arrivals'
import journeys from './journey'

export default combineReducers({
    routing: routerReducer,
    arrivals,
    journeys
})