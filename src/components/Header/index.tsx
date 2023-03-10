import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../Button";
import { LoginContext } from "../../context/auth";
import { changeLocalStorage } from "../../services/Storage/storage";
import { IUserDataStorage } from "../../types/api.types";

function Header() {
  const {user, setUser,isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
  const userName = user as IUserDataStorage;

  const navigate = useNavigate()

  function logout() {
    setUser({});
    setIsLoggedIn(false);
    changeLocalStorage({
      login: false,
      user: {}
    })
    navigate('/');
  }

  return (
    <header className="w-full bg-blue-300 p-6 text-white text-center">
      <Link className="text-2xl font-semibold" to='/'>DIO BANK</Link>

      {isLoggedIn ? (
        <div className="container mx-auto flex justify-between items-center mt-5 flex-col gap-3 md:flex-row md:gap-0">
          <h2>{`Bem-vindo ${(userName.name)}`}</h2>
          <Button text="Sair" extraStyle="bg-white text-blue-400 max-w-[240px] hover:text-white" onClick={logout}/>
        </div>
      ) : null}

    </header>
  )
}

export default Header;
