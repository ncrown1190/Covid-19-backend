import express from "express";
import { getClient } from "../db";
//import CovidFinder from "../models/CovidFinder";
// import { ObjectId } from 'mongodb';
//import ShoutOut from '../models/shoutout';

const covidFinderRoutes = express.Router();

covidFinderRoutes.get("/covidFinder", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection("covidFinder")
      .find()
      .toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default covidFinderRoutes;
