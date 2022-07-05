import React from "react";
import Vector from "../images/Vector.svg";

function Header() {
    return (
        <header className="header">
            <img src={Vector} alt="Лого" className="header__logo"/>
        </header>
    );
}

export default Header;