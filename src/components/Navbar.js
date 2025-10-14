import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logoImage from "../assets/images/Megaselia_logo.jpg";
import { FaUser } from "react-icons/fa";

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar" ref={navbarRef}>
            <div className="navbar-left">
                <div className="logo">
                    <img src={logoImage} alt="Logo" />
                </div>
            </div>
            <div className="navbar-center">
                <div className="nav-item" onMouseEnter={() => setActiveDropdown("maps")} onMouseLeave={() => setActiveDropdown(null)}>
                    <button
                        className="dropdown-toggle nav-item-hover"
                        aria-expanded={activeDropdown === "maps"}
                        aria-controls="maps-dropdown"
                    >
                        Maps
                    </button>
                    {activeDropdown === "maps" && (
                        <div className="dropdown full-page-dropdown" id="maps-dropdown">
                            <p>Full-page dropdown content for Maps</p>
                        </div>
                    )}
                </div>
                <div className="nav-item" onMouseEnter={() => setActiveDropdown("keys")} onMouseLeave={() => setActiveDropdown(null)}>
                    <button
                        className="dropdown-toggle nav-item-hover"
                        aria-expanded={activeDropdown === "keys"}
                        aria-controls="keys-dropdown"
                    >
                        Keys
                    </button>
                    {activeDropdown === "keys" && (
                        <div className="dropdown full-page-dropdown" id="keys-dropdown">
                            <p>Full-page dropdown content for Keys</p>
                        </div>
                    )}
                </div>
                <div className="nav-item" onMouseEnter={() => setActiveDropdown("taxa")} onMouseLeave={() => setActiveDropdown(null)}>
                    <button
                        className="dropdown-toggle nav-item-hover"
                        aria-expanded={activeDropdown === "taxa"}
                        aria-controls="taxa-dropdown"
                    >
                        Taxa
                    </button>
                    {activeDropdown === "taxa" && (
                        <div className="dropdown full-page-dropdown" id="taxa-dropdown">
                            <p>Full-page dropdown content for Taxa</p>
                        </div>
                    )}
                </div>
                <div className="nav-item" onMouseEnter={() => setActiveDropdown("projects")} onMouseLeave={() => setActiveDropdown(null)}>
                    <button
                        className="dropdown-toggle nav-item-hover"
                        aria-expanded={activeDropdown === "projects"}
                        aria-controls="projects-dropdown"
                    >
                        Projects
                    </button>
                    {activeDropdown === "projects" && (
                        <div className="dropdown full-page-dropdown" id="projects-dropdown">
                            <p>Full-page dropdown content for Projects</p>
                        </div>
                    )}
                </div>
                <div className="nav-item" onMouseEnter={() => setActiveDropdown("people")} onMouseLeave={() => setActiveDropdown(null)}>
                    <button
                        className="dropdown-toggle nav-item-hover"
                        aria-expanded={activeDropdown === "people"}
                        aria-controls="people-dropdown"
                    >
                        People
                    </button>
                    {activeDropdown === "people" && (
                        <div className="dropdown full-page-dropdown" id="people-dropdown">
                            <p>Full-page dropdown content for People</p>
                        </div>
                    )}
                </div>
                <div className="nav-item" onMouseEnter={() => setActiveDropdown("about")} onMouseLeave={() => setActiveDropdown(null)}>
                    <button
                        className="dropdown-toggle nav-item-hover"
                        aria-expanded={activeDropdown === "about"}
                        aria-controls="about-dropdown"
                    >
                        About
                    </button>
                    {activeDropdown === "about" && (
                        <div className="dropdown full-page-dropdown" id="about-dropdown">
                            <p>Full-page dropdown content for About</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="navbar-right">
                <div className="sign-in">
                    <FaUser size={30} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

