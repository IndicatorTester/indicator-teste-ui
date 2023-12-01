import React from "react";
import 'tailwindcss/tailwind.css'
import Menu from "./menu";
import TestPage from "./testPage";
import '../globals.css'

const App = () => {
    return (
        <>
            <div className="w-screen flex items-start">
                <Menu />
                {/* <TestPage /> */}
            </div>
        </>
    );
};

export default App;
