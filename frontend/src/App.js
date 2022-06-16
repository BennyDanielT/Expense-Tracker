import "./App.css";
import { Routing } from "./components/routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
