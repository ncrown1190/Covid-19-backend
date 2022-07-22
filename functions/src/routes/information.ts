import express from "express";
import { getClient } from "../db";
import Information from "../models/Information";
// import { ObjectId } from 'mongodb';
//import ShoutOut from '../models/shoutout';

const routes = express.Router();

routes.get("/information", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection("information")
      .find()
      .toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

routes.post("/information", async (req, res) => {
  const information = req.body as Information;
  try {
    const client = await getClient();
    await client
      .db()
      .collection<Information>("information")
      .insertOne(information);
    res.status(201).json(information);
  } catch (err) {
    console.error(err);
  }
});

// routes.post("/information", (req, res) => {
//   const information = req.body as Information;
//   getClient()
//     .then((client) => {
//       return client
//         .db()
//         .collection<Information>("shoutouts")
//         .insertOne(information)
//         .then((result) => {
//           res.status(201).json(information);
//         });
//     })
//     .catch((err) => {
//       console.error("FAIL", err);
//       res.status(500).json({ message: "Internal Server Error" });
//     });
// });

export default routes;
