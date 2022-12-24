import { IUserDataStorage } from "../../types/api.types";

export interface IDioBank {
    login: boolean;
    user: IUserDataStorage | {};
}