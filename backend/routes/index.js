import express from "express";
import {createGroup, deleteGroup, updateGroup, viewGroup, viewGroups} from "../controllers/group.js";

const router = express.Router();

router.post("/create-group", createGroup);
router.put("/update-group/:id", updateGroup);
router.delete("/delete-group/:id", deleteGroup);
router.get("/view-groups", viewGroups);
router.get("/view-group/:id", viewGroup);

export {router}