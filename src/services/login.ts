import { api } from '../api'

export const login = async (email: string, password: string): Promise<void> => {
    const data: any = await api;

    if(email !== data.email || password !== data.password) {
        return alert('Dados inválidos')
    }
    alert(`Bem-vindo ${email}`);
}