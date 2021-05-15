import { useState } from "react";

export type User = {
  username: string;
  password: string;
  id: string;
  role: "admin" | "user";
};

export interface IDatabase {
  users: User[];
  MIN_PASSWORD_LENGTH: number;
}

export const database: IDatabase = {
  users: [
    {
      id: "14af3e0e-548a-431a-b3ca-82bf7bea545b",
      username: "denis",
      password: "denis2000",
      role: "admin",
    },
    {
      id: "be86eae5-4a7c-47d5-8e76-22208685614f",
      username: "ben",
      password: "ben1990",
      role: "admin",
    },
    {
      id: "d9c83d61-fa50-44a9-8091-a17c286bdf86",
      username: "tom",
      password: "tomsecret",
      role: "user",
    },
  ],
  MIN_PASSWORD_LENGTH: 3,
};
