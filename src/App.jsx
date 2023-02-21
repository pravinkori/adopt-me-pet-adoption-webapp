import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";


/*
 * App is a function component
 * A function component must return markup(which is what React.createElement generates.)
 */
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />

        </div>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
