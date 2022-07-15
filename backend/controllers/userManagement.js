import { supabase } from "../models/index.js";
import { errorCodeResponses, isFieldAbsent } from "../utils.js";
import * as _ from "lodash";

// Signup module for the NodeJS
export const userSignup = async (request, response) => {
  try {
    const { first_name, last_name, password, email } = request.body;

    let { user, error } = await supabase.auth.signUp({
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: password,
    });
    console.log(user);
    if (user.id) {
      const { data, error } = await supabase.from("profiles").insert([
        {
          user_id: user.id,
          first_name: first_name,
          last_name: last_name,
          email_id: email,
        },
      ]);
      console.log(error);
    }
    return response.status(200).send(user);
  } catch (err) {
    console.log(err);
    return response.status(500).send(errorCodeResponses["500"]);
  }
};

// Module for the signin for the user
export const userSignin = async (request, response) => {
  try {
    const { password, email } = request.body;

    let { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    console.log(user);

    return response.status(200).send({
      user,
    });
  } catch (err) {
    console.log(err);
    return response.status(500).send(errorCodeResponses["500"]);
  }
};
