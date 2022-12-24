import { IUserData } from "./types/api.types"

const conta = {
    id: '1',
    email: 'matporto03@gmail.com',
    password: '123456',
    name: 'Matheus Porto',
    balance: 2000
}

export const api: Promise<IUserData> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})