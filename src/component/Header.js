import React from "react";
import Connection from "./Connection";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-2 px-8">
            <span className="font-black text-xl">$CrowdFund</span>
            <Connection />
        </header>
    );
};

export default Header;
