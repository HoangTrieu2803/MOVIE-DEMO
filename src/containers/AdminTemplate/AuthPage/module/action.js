import * as ActionType from "./constants"
import api from "utils/apiUtils";
export const actAuth = (user , history) =>{
    return(dispatch) =>{
        dispatch(actAuthRequest());
        // axios({
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        //     method:"POST",
        //     data: user,
        // })
        api.post("QuanLyNguoiDung/DangNhap", user)
        .then((result)=>{
            //check ma nguoi dung
            if(result.data.content.maLoaiNguoiDung === "KhachHang"){
                return Promise.reject({
                    response: {
                        data:{
                            content:"chim cut"
                        },
                    }
                });
            }
            //luu thong tin xuong localStorage
            localStorage.setItem("UserAdmin",JSON.stringify(result.data.content));
            //chuyen qua trang dashboard
            history.replace("/dashboard")
            dispatch(actAuthSuccess(result.data.content));
        })
        .catch((error)=>{
            dispatch(actAuthFailed(error));
        })  
    }
}
const actAuthRequest = () =>{
    return{
        type: ActionType.AUTH_REQUEST,
    }
}
const actAuthSuccess = (data) =>{
    return{
        type:ActionType.AUTH_SUCCESS,
        payload: data
    }
}
const actAuthFailed = (error) =>{
    return{
        type:ActionType.AUTH_FAILED,
        payload:error,
    }
}