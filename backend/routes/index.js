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

const router = express.Router();

// group routes
router.post("/create-group", createGroup);
router.put("/update-group/:id", updateGroup);
router.delete("/delete-group/:id", deleteGroup);
router.get("/view-groups", viewGroups);
router.get("/view-group/:id", viewGroup);

// tags routes
router.post("/create-tag", createTag);
router.put("/update-tag/:id", updateTag);
router.delete("/delete-tag/:id", deleteTag);
router.get("/view-tags", viewTags);
router.get("/view-tag/:id", viewTag);

export { router };
