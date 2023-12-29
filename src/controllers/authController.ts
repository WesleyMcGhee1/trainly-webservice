import { Request, Response } from "express";

async function createUser(req: Request, res: Response): Promise<Response> {
  const { username, password, email, firstName, lastName } = req.body;

  return res.status(200);
}

export { createUser };
