import React from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <header>
                    <Link to="/">
                        Adopt Me!
                    </Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
