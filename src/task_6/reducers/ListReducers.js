import { ADD_PRODUCT, Ed_PRODUCT, SAVE_PRODUCT, DEL_PRODUCT, IZ_PRODUCT } from "../actions/listActionts";

const initialState = []


const listReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            
            return [...state, {id: Number(state.length)+1, name: action.payload.el.name ,description: action.payload.el.description ,price: action.payload.el.price, available: action.payload.el.available, completed: false}]
        case DEL_PRODUCT:       
            return state.filter(el => el.id !== Number(action.payload.id)+1)
        case IZ_PRODUCT:
            return state.map(
                ({id , name , description, price, available, completed}) => ({id , name , description, price, available: (id == Number(action.payload.id)+1 ? (available=='Доступен'? 'Не доступно':'Доступен'):available), completed})
            )
        case Ed_PRODUCT:
            console.log(action.payload.id);
            return state.map(
                ({id , name , description, price, available, completed}) => ({id , name , description, price, available, completed: (id == Number(action.payload.id)?!completed:completed)}))
        case SAVE_PRODUCT:
            console.log(action.payload.el);
            return state.map(
                ({id , name , description, price, available, completed}) => (id == Number(action.payload.el.id)?({id: action.payload.el.id , name: action.payload.el.name , description:action.payload.el.description, price: action.payload.el.price, available:action.payload.el.available, completed}):({id , name , description, price, available, completed})))
        default:
            return state
    }
}

export default listReducers;