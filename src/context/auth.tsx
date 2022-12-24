import { createContext, useEffect, useState } from "react";

import { getAllLocalStorage } from "../services/Storage/storage";

import { IDioBank } from "../services/Storage/types";
import { IUserDataStorage } from "../types/api.types";
import { ILoginContext, ILoginContextProvider } from "./types";

export const LoginContext = createContext({} as ILoginContext);

export function LoginContextProvider({children}: ILoginContextProvider) {
  const [ isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUserDataStorage | {}>({})

  const storage = getAllLocalStorage();

  useEffect(() => {
    if(storage) {
      const { login, user } = JSON.parse(storage) as IDioBank;
      setIsLoggedIn(login);
      setUser(user);
    }
  }, [])

  return(
    <LoginContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>   
  )
}