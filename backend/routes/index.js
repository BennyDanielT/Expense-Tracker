import express from "express";

import {
  createGroup,
  deleteGroup,
  updateGroup,
  viewGroup,
  viewGroups,
} from "../controllers/group.js";

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

import { getCoupons } from "../controllers/coupons.js";
import { userSignin, userSignup } from "../controllers/userManagement.js";

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
router.post("/sign-in", userSignin);

export { router };
