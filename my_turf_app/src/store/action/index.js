export const Register = "REGISTER";
export const Add_Count ="Add_Count";
export const Login_UserData ="LoginUserData";

export const register = (detail) => {
    return {
        type: Register,
        payload: detail
    }
}
export const count =(detail)=>{
    return{
        type:Add_Count,
        payload:detail
    }
}
export const LoginUserData =(loginUserData)=>{
    return{
        type:Login_UserData,
        payload:loginUserData,
    }
}