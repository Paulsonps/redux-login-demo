export interface User {
    username?: string;
    password?: string;
}

export interface Authenticated {
    users: UserObject;
}

export interface UserObject {
    error: boolean;
    message: any;
}
