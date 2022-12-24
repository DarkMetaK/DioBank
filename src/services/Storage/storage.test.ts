import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
    login: false,
    user: {}
}

describe('LocalStorage', () => {

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');

    it('Deve retornar o objeto local storage, através da key diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');

        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    })

    it('Deve criar o objeto no localStorage', () => {
      createLocalStorage();
      expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank));
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank);
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})