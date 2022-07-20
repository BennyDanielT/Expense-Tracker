/**
 * @author ${Vatsal Yadav, Abhishek Uppe}
 */

import express from "express";

import { getCoupons } from "../controllers/coupons.js";
import {
  getCoupon,
  getMerchantReviews,
  getMerchantLocations,
  addMerchantToDB,
} from "../controllers/coupons.js";

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
  viewTagExpenses,
} from "../controllers/tags.js";

import {
  createGroup,
  deleteGroup,
  updateGroup,
  viewGroup,
  viewGroups,
  viewUsers,
} from "../controllers/group.js";

import {
  addExpense,
  deleteExpense,
  editExpense,
  viewExpense,
  viewExpenses,
} from "../controllers/expense.js";
import { createPaymentIntent } from "../controllers/payment-server.js";

const router = express.Router();

// group routes
router.post("/create-group", createGroup);
router.put("/update-group/:id", updateGroup);
router.delete("/delete-group/:id", deleteGroup);
router.get("/view-groups", viewGroups);
router.get("/view-group/:id", viewGroup);
router.get("/view-users", viewUsers);

//expense routes
router.post("/add-expense", addExpense);
router.put("/edit-expense/:id", editExpense);
router.delete("/delete-expense/:id", deleteExpense);
router.get("/view-expenses", viewExpenses);
router.get("/view-expense/:id", viewExpense);

// tags routes
router.post("/create-tag", createTag);
router.put("/update-tag/:id", updateTag);
router.delete("/delete-tag/:id", deleteTag);
router.get("/view-tags/:id", viewTags);
router.get("/view-tag/:id", viewTag);
router.get("/fetch-expenses/:id", viewTagExpenses);

router.post("/user-signup", userSignup);
// routing for the coupon management
router.get("/get-coupons", getCoupons);
router.get("/get-coupon/:id", getCoupon);
router.post("/sign-in", userSignin);

// payment reminder routes
router.post("/create-reminder", createReminder);
router.put("/edit-reminder", updateReminder);
router.delete("/delete-reminder/:id", deleteReminder);
router.post("/view-reminders", viewReminders);
router.post("/create-payment-intent", createPaymentIntent);
router.get("/get-reviews/:id", getMerchantReviews);
router.get("/get-location/:id", getMerchantLocations);
router.post("/add-coupon-redeemption", addMerchantToDB);
export { router };
