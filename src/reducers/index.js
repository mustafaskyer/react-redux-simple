import {combineReducers} from 'redux'

//import other reducers
import {players} from './playersReducers'
import {numbers} from './numbersReducers'
export default combineReducers({
    players:players,
    numbers:numbers
})