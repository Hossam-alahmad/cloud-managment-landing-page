import React from "react";
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Support />
            <AllInOne />
            <Pricing />
            <Footer />
        </div>
    );
};

export default App;
