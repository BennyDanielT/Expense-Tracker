import express from "express";
import {createGroup, deleteGroup, updateGroup, viewGroup, viewGroups} from "../controllers/group.js";
import {createReminder, deleteReminder, updateReminder, viewReminders} from "../controllers/reminders.js";

const router = express.Router();

router.post("/create-group", createGroup);
router.put("/update-group/:id", updateGroup);
router.delete("/delete-group/:id", deleteGroup);
router.get("/view-groups", viewGroups);
router.get("/view-group/:id", viewGroup);

router.post("/create-reminder", createReminder);
router.put("/update-reminder/:id", updateReminder);
router.delete("/delete-reminder/:id", deleteReminder);
router.get("/view-groups", viewReminders);


export {router}