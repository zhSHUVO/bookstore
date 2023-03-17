import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addbook" element={<Add />} />
                <Route path="/editbook/:bookId" element={<Edit />} />
            </Routes>
        </Router>
    );
}

export default App;
