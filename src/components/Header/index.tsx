import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="w-full bg-blue-300 p-6 text-white text-center">
      <Link className="text-2xl font-semibold" to='/'>DIO BANK</Link>
    </header>
  )
}

export default Header;
