import express from "express";
import {createGroup} from "../controllers/group.js";

const router = express.Router();

router.post("/create-group", createGroup);

export {router}