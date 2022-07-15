import express from "express";

import { getCoupons } from "../controllers/coupons.js";
import { getCoupon } from "../controllers/coupons.js";

import { userSignin, userSignup } from "../controllers/userManagement.js";
import {
  createReminder,
  deleteReminder,
  updateReminder,
  viewReminders,
} from "../controllers/reminders.js";

import {
  createTag,
  deleteTag,
  updateTag,
  viewTag,
  viewTags,
} from "../controllers/tags.js";

import {
  createGroup,
  deleteGroup,
  updateGroup,
  viewGroup,
  viewGroups,
  viewUsers,
} from "../controllers/group.js";

const router = express.Router();

// group routes
router.post("/create-group", createGroup);
router.put("/update-group/:id", updateGroup);
router.delete("/delete-group/:id", deleteGroup);
router.get("/view-groups", viewGroups);
router.get("/view-group/:id", viewGroup);
router.get("/view-users", viewUsers);

// tags routes
router.post("/create-tag", createTag);
router.put("/update-tag/:id", updateTag);
router.delete("/delete-tag/:id", deleteTag);
router.get("/view-tags", viewTags);
router.get("/view-tag/:id", viewTag);

router.post("/user-signup", userSignup);
// routing for the coupon management
router.get("/get-coupons", getCoupons);
router.get("/get-coupon/:id", getCoupon);
router.post("/sign-in", userSignin);

router.post("/create-reminder", createReminder);
router.put("/edit-reminder", updateReminder);
router.delete("/delete-reminder/:id", deleteReminder);
router.post("/view-reminders", viewReminders);

export { router };
