import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import App13ReactBasics from "./Lesson13/App13ReactBasics";
import App14CallRestServices from "./Lesson14CallRestServices/App14CallRestServices";
import App14ClassicalForms from "./Lesson14ClassicalForms/App14ClassicalForms";
import App14ReduxBasics from "./Lesson14ReduxBasics/App14ReduxBasics";
import App14ReduxForms from "./Lesson14ReduxForms/App14ReduxForms";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/ReactBasics">ReactBasics</Link>
                        </li>
                        <li>
                            <Link to="/App14ReduxBasics">App14ReduxBasics</Link>
                        </li>
                        <li>
                            <Link to="/App14CallRestServices">App14CallRestServices</Link>
                        </li>
                        <li>
                            <Link to="/App14ClassicalForms">App14ClassicalForms</Link>
                        </li>
                        <li>
                            <Link to="/App14ReduxForms">App14ReduxForms</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/ReactBasics">
                        <App13ReactBasics/>
                    </Route>
                    <Route path="/App14ReduxBasics">
                        <App14ReduxBasics />
                    </Route>
                    <Route path="/App14CallRestServices">
                        <App14CallRestServices />
                    </Route>
                    <Route path="/App14ClassicalForms">
                        <App14ClassicalForms />
                    </Route>
                    <Route path="/App14ReduxForms">
                        <App14ReduxForms />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}