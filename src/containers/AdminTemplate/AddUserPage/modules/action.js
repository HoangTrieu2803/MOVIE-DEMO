import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils"
export const actAddUser = (user) =>{
    return(dispatch) =>{
        dispatch(actAddUserRequest());
        let accessToken ="";
        if(localStorage.getItem("UserAdmin")){
            accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken; 
        }
        // axios({
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        //     method: "POST",
        //     data: user,
        //     headers:{
        //         Authorization: `Bearer ${accessToken}`,
        //     }
        // })
        api.post("QuanLyNguoiDung/ThemNguoiDung",user)
        .then((result)=>{
            dispatch(actAddUserSuccess(result.data));
        })
        .catch((error)=>{
            dispatch(actAddUserFailed(error));
        })
    }
}
const actAddUserRequest = () =>{
    return{
        type:ActionType.ADD_USER_REQUEST,
    }
}
const actAddUserSuccess = (data) =>{
   return{
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
   }
}
const actAddUserFailed = (error) =>{
   return{
    type: ActionType.ADD_USER_FAILED,
    payload:error,
   }
}