import { Account } from "./account.model"

export interface Owner{
    id: number;
    name: string;
    dateOfBirth: Date;
    address: string;

    account?: Account[];
}