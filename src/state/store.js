import { createStore } from 'redux'
import { combineReducers } from 'redux'

const addOns = (item)=> ({
    type: 'ADD_ITEM',
    payload : item
})

const removeOns = (index) => ({
    type: 'REMOVE_ITEM',
    payload: index
})
const toggler = (crrValue)=>{return {type: crrValue}}
const changePlan = (planValue)=>{return{type: planValue}}

const addOnsReducer = (state = [], action) =>{
    switch(action.type) {
        case "ADD_ITEM":
            return[...state, action.payload]

        case "REMOVE_ITEM":
            return state.filter((item, index) => index !== action.payload)

        default:
            return state
    }
}

const planReducer = (state = "", action)=>{
    switch(action.type){
        case "ARCADE":
        return state = 'arcade'

        case "ADVANCED":
            return state = 'advanced'
        
        case "PRO":
            return state = 'pro'

        default:
            return state
    }
}

const timeReducer = (state = "month", action) => {
    switch(action.type) {
        case "MONTHLY":
        return state = "month"

        case "YEARLY":
            return state = "year"

        default:
            return state
    }
}

const allReducers = combineReducers({
    timer: timeReducer, //this is monthly and yealy
    arr: addOnsReducer,
    plan: planReducer
})
const store = createStore(allReducers)

export { store, toggler, addOns, removeOns, changePlan}