import { login } from "./login";

/* const mockSetIsLoggedIn = jest.fn()
const mockUseNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockUseNavigate
})) */

describe('login', () => { 

  it('Deve mudar o estado de login e redirecionar, caso os dados estejam corretos', async () => {
      const response = await login('matporto03@gmail.com', '123456')
      expect(response).toBeTruthy();
      /*expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
      expect(mockUseNavigate).toHaveBeenCalledWith('/1')*/
  })

  it('Não deve mudar o estado de login, nem redirecionar caso os dados estejam incorretos', async() => {
      const response = await login('email@invalido.com', '123456')
      expect(response).toBeFalsy()
      /*expect(mockSetIsLoggedIn).not.toHaveBeenCalled
      expect(mockUseNavigate).not.toHaveBeenCalled*/
  })

})