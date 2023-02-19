import React from "react";
import { createRoot } from "react-dom/client";
import Pet from './Pet';
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
            {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Winter" animal="Cat" breed="Mixed" /> */}
        </div>
    )

    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, "Adopt Me"),
    //     React.createElement(Pet, {
    //         name: "Luna",
    //         animal: "Dog",
    //         breed: "Havanese",
    //     }),
    //     React.createElement(Pet, {
    //         name: "Pepper",
    //         animal: "Bird",
    //         breed: "Cockatiel",
    //     }),
    //     React.createElement(Pet, {
    //         name: "Winter",
    //         animal: "Cat",
    //         breed: "Mixed",
    //     }),
    // ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
