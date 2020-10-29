import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { Schema } from 'mongoose';

export type Token = {
  _id: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  name: string;
};

type AuthRequest = Request & {
  token: Token;
};

export default (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (token?.startsWith('Bearer ')) {
      const verified = verify(token.substring(7), process.env.ACCESS_KEY!) as Token;
      req.token = verified;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch {
    res.sendStatus(401);
  }
};
