import { ADD_PRODUCT, DEL_PRODUCT, IZ_PRODUCT } from "../actions/listActionts";

const initialState = []


const listReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            
            return [...state, {id: Number(state.length)+1, name: action.payload.el.name ,description: action.payload.el.description ,price: action.payload.el.price, available: action.payload.el.available}]
        case DEL_PRODUCT:       
            return state.filter(el => el.id !== Number(action.payload.id)+1)
        case IZ_PRODUCT:

              
            return [...state, state[Number(action.payload.id)-1].available = "Доступен"]
        default:
            return state
    }
}

export default listReducers;