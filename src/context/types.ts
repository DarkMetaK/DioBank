import { IUserDataStorage } from "../types/api.types";

export interface ILoginContext {
  user: IUserDataStorage | {};
  setUser: (user: IUserDataStorage | {}) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export interface ILoginContextProvider {
  children: React.ReactNode
}