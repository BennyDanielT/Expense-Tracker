import { supabase } from "../models/index.js";
import { errorCodeResponses, isFieldAbsent } from "../utils.js";
import * as _ from "lodash";

export const getCoupons = async (request, response) => {
  try {
    const { data, error } = await supabase.from("coupons").select("*");
    if (error) {
      return response.status(400).send(error);
    }
    return response.send({ success: data });
  } catch (err) {
    return response.status(500).send(errorCodeResponses["500"]);
  }
};

export const getCoupon = async (request, response) => {
  try {
    let id = request.params.id.trim();
    if (id) {
      const { data, error } = await supabase
        .from("coupons")
        .select("*")
        .eq("id", id);
      if (error) {
        return response.status(400).send(error);
      }
      return response.send({ success: data });
    } else {
      return response.status(400).send(error);
    }
  } catch (err) {
    return response.status(500).send(errorCodeResponses["500"]);
  }
};
