import { NextFunction, Request, Response } from "express";

const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);

  let errorMessage = {
    number: "alphabet",
    error: true,
  };

  if (error instanceof Error) {
    res.status(400).send(errorMessage);
  }
  next(error);
};

export default {
  unknownEndpoint,
  errorHandler,
};
