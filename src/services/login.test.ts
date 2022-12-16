import { login } from "./login";

describe('login', () => { 

    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail = 'matporto03@gmail.com';
    const mockPassword = '123456';

    it('Deve dar mensagem de bem-vindo, caso o e-mail seja válido', async () => {
        await login(mockEmail, mockPassword)
        expect(mockAlert).toHaveBeenCalledWith(`Bem-vindo ${mockEmail}`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', () => {
        login(mockEmail, mockPassword)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem-vindo')
    })

    it('Deve exibir um erro caso os dados sejam inválidos', async() => {
        await login('email@invalido.com', '123456')
        expect(mockAlert).toHaveBeenCalledWith('Dados inválidos')
    })
 })