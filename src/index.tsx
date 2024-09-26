import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext";

const Root = () => (
    <div>
        <Link to="/page-one">Page One</Link>
        <br />
        <Link to="/page-two">Page Two</Link>
        <br />
        <Link to="/page-three">Page Three</Link>
    </div>
);

ReactDOM.render(
    <React.StrictMode>
        <ApiProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Root />
                    </Route>
                    <Route path="/:id">
                        <App />
                    </Route>
                </Switch>
            </Router>
        </ApiProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
