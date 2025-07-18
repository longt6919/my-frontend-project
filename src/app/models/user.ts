import { Role } from "./role";

export interface User{
    id: number;
    fullname: string;
    address: string;
    phone_number: string;
    is_active: boolean;
    date_of_birth: Date ;
    active: boolean;
    facebook_account_id: string;
    google_account_id: string;
    role: Role;
}