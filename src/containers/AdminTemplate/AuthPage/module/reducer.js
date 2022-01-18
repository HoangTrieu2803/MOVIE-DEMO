import * as ActionType from "./constants";
const initalState ={
    loading: false,
    data: null,
    error : null,
}
const authPageReducer = (state =initalState, action) =>{
    switch (action.type) {
        case ActionType.AUTH_REQUEST:
        {
            state.loading =true;
            state.data = null;
            state.error = null;
            return{...state}
        }
        case ActionType.AUTH_SUCCESS:{
            state.loading= false;
            state.data = action.payload;
            state.error = null;
            return{...state}
        }
        case ActionType.AUTH_FAILED:{
            state.loading= false;
            state.data = null;
            state.error = action.payload;
            return{...state}
        }
        default:
            return{...state};
    }
}

export default authPageReducer;