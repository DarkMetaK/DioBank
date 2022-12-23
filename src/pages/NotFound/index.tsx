import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-3 h-[80vh]">
      <h1 className="text-3xl text-red-600 font-bold text-center">(404) - Página não encontrada</h1>
      <p className="text-center max-w-md my-3">Por algum motivo a página que você tentou acessar encontra-se indisponível no momento!</p>
      <Button text="Home" onClick={() => navigate('/')}></Button>
    </div>
  )
}

export default NotFound
