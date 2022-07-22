import express from "express";

import { getClient } from "../db";

import User from "../models/User";

const userRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

// get one user to access friends
userRouter.get("/:uid", async (req, res) => {
  try {
    const uid: string = req.params.uid;
    const client = await getClient();
    const result = await client
      .db()
      .collection<User>("users")
      .findOne({ uid: uid as string });
    res.json(result);
  } catch (err) {
    errorResponse(err, res);
  }
});
export default userRouter;
