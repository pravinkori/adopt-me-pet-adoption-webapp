import React from "react";
import { createRoot } from "react-dom/client";

const pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

/*
 * App is a function component
 * A function component must return markup(which is what React.createElement generates.)
 */
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me"),
        React.createElement(pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese",
        }),
        React.createElement(pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cockatiel",
        }),
        React.createElement(pet, {
            name: "Winter",
            animal: "Cat",
            breed: "Mixed",
        }),
    ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
