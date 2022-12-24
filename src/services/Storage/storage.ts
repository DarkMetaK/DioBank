import { IDioBank } from "./types";

const dioBank: IDioBank = {
  login: false,
  user: {}
}

export function getAllLocalStorage(): string | null {
  return localStorage.getItem('diobank');
}

export function createLocalStorage():void {
  localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export function changeLocalStorage(dioBank: IDioBank): void {
  localStorage.setItem('diobank', JSON.stringify(dioBank))
}