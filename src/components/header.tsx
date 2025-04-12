import { useState } from "react";
import logo from "../assets/img/logo.png"; //


export const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive((prev) => !prev);
    };

    return (
        <>
            <div className="circle"></div>
            <header>
                <a href="#">
                    <img src={logo} alt="logo Coca-cola" className="logo" />
                </a>
                <nav className="navigation">
                    <ul className={menuActive ? "active" : ""}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">NewsLetter</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <button
                        className={`menu ${menuActive ? "active" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={menuActive}
                    >
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </nav>
            </header>
        </>
    );
};
