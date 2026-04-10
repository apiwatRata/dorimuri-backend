
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    id: number;
    firstName: string;
    lastName: string;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export class Mutaion {
    createUser?: User;
}

type Nullable<T> = T | null;
