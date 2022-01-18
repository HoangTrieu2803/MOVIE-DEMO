import {combineReducers} from "redux" ;
import listMovieReducer from "../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../containers/HomeTemplate/DetailMovie/modules/reducer";
import authPageReducer from "../containers/AdminTemplate/AuthPage/module/reducer";
import addUserReducer from "../containers/AdminTemplate/AddUserPage/modules/reducer";
const rootReducer = combineReducers ({
    listMovieReducer,
    detailMovieReducer,
    authPageReducer,
    addUserReducer,
})
export default rootReducer;