import { createContext } from "react";
import { ILoginContext, ILoginContextProvider } from "./types";

export const LoginContext = createContext({} as ILoginContext);

export function LoginContextProvider({children}: ILoginContextProvider) {
    const user = 'Matheus'
    const isLoggedIn = false;

    return(
      <LoginContext.Provider value={{ user, isLoggedIn }}>
        {children}
      </LoginContext.Provider>   
    )
}