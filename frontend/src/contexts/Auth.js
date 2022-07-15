import React from "react";
import { supabase } from "../supabase";

export function useAuth() {
  return {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user: () => supabase.auth.session(),
    forgetPassword: (data) => supabase.auth.api.resetPasswordForEmail(data),
  };
}
