import * as ActionType from "./constants";
import api from "utils/apiUtils";
export const actFetchListMovie = () =>{
    return (dispatch) =>{
        //request
        dispatch(actListMovieRequest());
        //call api
        // axios({
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: "GET",
        // })
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
        .then((result)=>{
            dispatch(actListMovieSuccess(result.data.content));
        })
        .catch((error)=>{
            dispatch(actListMovieFailed(error));
        })
    }
}
export const actListMovieRequest =() =>{
    return{
        type:ActionType.LIST_MOVIE_REQUEST,
    }
}
export const actListMovieSuccess = (data) =>{
    return{
        type:ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    }
}
export const actListMovieFailed = (error) =>{
    return{
        type:ActionType.LIST_MOVIE_FAILED,
        payload: error,
    }
}