export interface ILoginContext {
  user: string;
  isLoggedIn: boolean;
}

export interface ILoginContextProvider {
  children: React.ReactNode
}