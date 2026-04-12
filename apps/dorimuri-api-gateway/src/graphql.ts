
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SignUpUser {
    username: string;
    birth_date: string;
    email: string;
    password: string;
    sex: number;
}

export class User {
    id: string;
    username: string;
    birth_date: string;
    email: string;
    sex: number;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export abstract class IMutation {
    abstract signUp(data: SignUpUser): User | Promise<User>;
}

type Nullable<T> = T | null;
