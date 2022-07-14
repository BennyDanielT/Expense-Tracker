import express from "express";
import {createGroup, deleteGroup, updateGroup, viewGroup, viewGroups, viewUsers} from "../controllers/group.js";

import {getCoupons} from "../controllers/coupons.js";
import {userSignin, userSignup} from "../controllers/userManagement.js";

const router = express.Router();

router.post("/create-group", createGroup);
router.put("/update-group/:id", updateGroup);
router.delete("/delete-group/:id", deleteGroup);
router.get("/view-groups", viewGroups);
router.get("/view-group/:id", viewGroup);
router.get("/view-users", viewUsers);

router.post("/user-signup", userSignup);
// routing for the coupon management
router.get("/get-coupons", getCoupons);
router.post("/sign-in", userSignin);


export {router};
