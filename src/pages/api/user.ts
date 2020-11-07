import { Request, Response } from 'express';

export default (request: Request, response: Response) => {
  switch (request.method) {
    case 'GET':
      response.status(200).send({ message: 'helloworld via get' });
    break;

    case 'POST':
      response.status(200).send({ body: request.body });
    default:
    break;
  }
};
