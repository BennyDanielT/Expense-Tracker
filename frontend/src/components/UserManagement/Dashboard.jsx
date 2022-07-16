import { useHistory } from "react-router";
import { useAuth } from "../../contexts/Auth.js";
/**
 * Author:    Ayush Verma
 * Created:   15.07.2022
 *
 * (c) Copyright by Group 24.
 **/
export function Dashboard() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth();

  const history = useHistory();

  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    history.push("/login");
  }

  return (
    <div>
      {/* Change it to display the user ID too 👇*/}
      {/*<p>Welcome, {user.id}!</p>*/}
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
