import { TypedUseSelectorHook, useSelector } from "react-redux";
import store from "./app/store";

export interface ICakeState {
  numOfCakes: number;
}

export interface IUser {
  name: string;
  id: number;
}

export interface IUserState {
  loading: boolean;
  users: Array<IUser>;
  error: string;
}

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;
