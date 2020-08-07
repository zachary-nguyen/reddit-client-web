import * as express from "express";
import { Request, Response } from "express";
import axios from "axios"

export default class ReleaseControllers{
    public path = "/api/releases";
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
    }


}
