import { IUserData } from "../types/api.types";

export interface ILoginContext {
  user: IUserData | null;
  setUser: (user: IUserData | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export interface ILoginContextProvider {
  children: React.ReactNode
}