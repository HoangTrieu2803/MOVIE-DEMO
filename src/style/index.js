import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(()=>({
    content:{
        backgroundColor : "black",
        color: "red",
        "& span":{
            fontSize : 15,
            "$:hover":{
                color: "yellow",
            }
        },
        "$:hover":{
            backgroundColor: "yellow"
        }
    },
    title: {
        fontSize: 50,
    }
}));

export default useStyle;