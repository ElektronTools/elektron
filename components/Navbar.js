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
                        Elektron AC⚡DC
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
                    <ul className="navbar-nav ms-auto">
                        {/* Botón con ícono para Soporte Remoto */}
                        <li className="nav-item">
                            <Link href="/remoto" className="nav-link menu-item">
                                <img 
                                    src="/support-icon.ico" 
                                    alt="Soporte Remoto" 
                                    style={{ width: '40px', height: '40px', marginRight: '8px' }} 
                                />
                                Soporte Remoto
                            </Link>
                        </li>
                        {/* Menú de Descargas con ícono */}
                        <li className={`nav-item dropdown ${isDownloadsOpen ? "show" : ""}`}>
                            <a 
                                className="nav-link dropdown-toggle menu-item" 
                                href="#" 
                                role="button" 
                                onClick={toggleDownloads} 
                                aria-expanded={isDownloadsOpen ? "true" : "false"}
                            >
                                <img 
                                    src="/download-icon.ico" 
                                    alt="Descargas" 
                                    style={{ width: '30px', height: '30px', marginRight: '8px' }} 
                                />
                                Descargas
                            </a>
                            <ul className={`dropdown-menu ${isDownloadsOpen ? "show" : ""}`}>
                                <li><a className="dropdown-item" href="/programas">Software Electrónica</a></li>
                                <li><a className="dropdown-item" href="/books">pdf´s</a></li>
                            </ul>
                        </li>
                        {/* Botón ¿Qué es Elektron? */}
                        <li className="nav-item">
                            <Link href="/about" className="nav-link menu-item">¿Qué es Elektron?</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
