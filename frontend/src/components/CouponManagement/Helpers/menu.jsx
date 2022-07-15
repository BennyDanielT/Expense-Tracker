import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { useAuth } from "../../../contexts/Auth";
import Swal from "sweetalert2";

const Menu = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();
  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    history.push("/login");
  }
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          Expense Tracker
        </Link>
        <Nav>
          <div className="col-md-3 text-end">
            <Link to="/">
              <button
                onClick={handleSignOut}
                type="button"
                className="btn btn-outline-primary me-2"
              >
                Logout
              </button>
            </Link>
          </div>
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
