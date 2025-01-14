import { NextFunction, Request, Response, Router } from "express";
import { axiosTMDB } from "../helpers/axiosTMDB";
import dotenv from "dotenv";
import { tmdbService } from "../services/tmdbService";
dotenv.config();

export const tmdbRouter = Router();

tmdbRouter.use(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const responseFromTmdbService = await tmdbService();
      res.status(200).json(responseFromTmdbService);
    } catch (e) {
      console.log("you have an error: ", e);
      res.status(400).send("you have an error");
    }
  }
);

// "search/movie?query=Jack+Reacher"
