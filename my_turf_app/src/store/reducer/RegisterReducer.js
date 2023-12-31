import { Login_UserData, Register } from "../action";
import { Add_Count } from "../action";
const initialState = {
    UserRegister: {},
    Count: 0,
    LoginUserDetail: {},
};

const UserRegister = (state = initialState, action) => {
    switch (action.type) {
        case Register:
            return {
                ...state,
                UserRegister: action.payload
            };
        case Add_Count:
            return {
                ...state,
                Count: action.payload
            }
        case Login_UserData:
            return {
                ...state,
                LoginUserDetail: action.payload
            }
        default:
            return state;
    }
};

export default UserRegister;
