import { ObjectId } from "mongodb";

export default interface Information {
  _id?: ObjectId;
  name: string;
  vaccine: string;
  doses: string;
}
