import { handleActions } from "redux-actions";
import { IUser } from "../../types/user";
import { UserActions } from "../actions";

const initialState = null;

export const UserReducer = handleActions<IUser | null, IUser>({
    [UserActions.Type.SET_USER]: (state, action) => action.payload,
}, initialState);