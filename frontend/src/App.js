import "./App.css";
import {Routing} from "./components/routing";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const body = document.querySelector('body');

        const options = {
            attributes: true
        }

        function callback(mutationList) {
            mutationList.forEach(function (mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (body.classList.contains("swal2-height-auto")) {
                        body.classList.remove("swal2-height-auto");
                    }
                }
            })
        }

        // Observing body tag changes for sweetalert2
        const observer = new MutationObserver(callback)
        observer.observe(body, options);


        // axios params
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            axios.defaults.baseURL = "http://localhost:3001/";
        }

        setLoading(false);

    }, []);

    return (
        <div className="h-100 d-flex w-100">
            <Provider store={store}>
                {!loading ?
                    <>
                        <Routing/>
                        <ToastContainer/>
                    </>
                    : <div>Loading...</div>}
            </Provider>
        </div>
    );
}

export default App;
