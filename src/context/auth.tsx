import { createContext, useState } from "react";
import { IUserData } from "../types/api.types";
import { ILoginContext, ILoginContextProvider } from "./types";

export const LoginContext = createContext({} as ILoginContext);

export function LoginContextProvider({children}: ILoginContextProvider) {
  const [ isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUserData | null>(null)

  return(
    <LoginContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>   
  )
}