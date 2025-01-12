import { NextFunction, Request, Response, Router } from "express";
import { axiosTMDB } from "../helpers/axiosTMDB";
import dotenv from "dotenv";
dotenv.config();

export const tmdbRouter = Router();

tmdbRouter.use(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const apiResponse = await axiosTMDB.get("movie/popular"); 
      const data = apiResponse.data;
      res.status(200).json(data);
    } catch (e) {
      console.log("you have an error: ", e);
      res.status(400).send("you have an error");
    }
  }
);
