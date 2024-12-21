import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDownloads = () => {
        setIsDownloadsOpen(!isDownloadsOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="d-flex align-items-center"> {/* Div para el logo y el texto */}
                    <Link href="/" className="navbar-brand">
                        <img src="/elektrontoolslogo.ico" alt="ElektronTools Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        ElektronTools AC⚡DC
                    </Link>
                </div>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleNavbar} 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded={isOpen ? "true" : "false"} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto"> {/* ms-auto para alinear a la derecha */}
                        <li className="nav-item">
                            <Link href="/servicios" className="nav-link">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/arduino" className="nav-link">Arduino</Link>
                        </li>
                        <li className={`nav-item dropdown ${isDownloadsOpen ? "show" : ""}`}>
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                onClick={toggleDownloads} 
                                aria-expanded={isDownloadsOpen ? "true" : "false"}
                            >
                                Descargas
                            </a>
                            <ul className={`dropdown-menu ${isDownloadsOpen ? "show" : ""}`}>
                                <li><a className="dropdown-item" href="/programas">Programas</a></li>
                                {/* <li><a className="dropdown-item" href="/books">PFD's</a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">¿Que es ElektronTools?</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
