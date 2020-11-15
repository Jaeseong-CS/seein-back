import { Request, Response } from 'express';
import { Error } from 'mongoose';

import { AuthRequest } from '../middleware/auth';
import { Card } from '../models';

export const get = async (req: Request, res: Response) => {
  const { page } = req.params;
  const cardList = await Card.paginate({}, { page, perPage: 12, sort: { createdAt: -1 } });
  res.status(200).send(cardList);
};

export const write = async (req: AuthRequest, res: Response) => {
  const { token } = req;
  const { title, content } = req.body;
  const card = new Card({
    title,
    content,
    writer: token?.name,
  });
  try {
    await card.save();
    res.sendStatus(200);
  } catch (err) {
    if (err instanceof Error.ValidationError) {
      console.error(err);
      res.status(400).send(err.message);
    } else {
      console.error(err);
      res.status(500).send(err);
    }
  }
};
