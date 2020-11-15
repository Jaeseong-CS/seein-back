import { Request, Response } from 'express';

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
  await card.save();
  res.sendStatus(200);
};
