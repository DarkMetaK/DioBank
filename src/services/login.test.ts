import { login } from "./login";

describe('login', () => { 

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('deve dar mensagem de bem-vindo', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
 })