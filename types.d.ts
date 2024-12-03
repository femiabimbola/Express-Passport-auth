// custom.d.ts
import { Request } from 'express';

export interface UserRequest extends Request {
  user?: {
    firstname: string;
    lastname: string;
    email: string;
    isAdmin?: boolean | undefined;
  };
}
interface User {
  firstname: string;
  lastname: string;
  email: string;
  isAdmin?: boolean;
}
