// custom.d.ts
import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: {
    isAdmin?: boolean | undefined;
  };
}
