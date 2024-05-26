import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import styles from './Navbar.module.css';
import LogoNavbar from '../Logo Navbar/LogoNavbar';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.nav}`}>
            <LogoNavbar />

            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className={`navbar-toggler ${styles.btn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler ${styles.icono}`}>🏀</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link to='/Calzado' className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Calzado
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to='/CalzadoHombre' className="dropdown-item">Hombre</Link></li>
                                <li><Link to='/CalzadoMujer' className="dropdown-item">Mujer</Link></li>
                                <li><Link to='/CalzadoNinios' className="dropdown-item">Niños</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to='/Indumentaria' className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Indumentaria
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to='/IndumentariaHombre' className="dropdown-item">Hombre</Link></li>
                                <li><Link to='/IndumentariaMujer' className="dropdown-item">Mujer</Link></li>
                                <li><Link to='/IndumentariaNinios' className="dropdown-item">Niños</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to='/Marcas' className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to='/Marcas/Adidas' className="dropdown-item">Adidas</Link></li>
                                <li><Link to='/Marcas/Nike' className="dropdown-item">Nike</Link></li>
                                <li><Link to='/Marcas/Jordan' className="dropdown-item">Jordan</Link></li>
                                <li><Link to='/Marcas/Underarmour' className="dropdown-item">Under Armour</Link></li>
                                <li><Link to='/Marcas/Puma' className="dropdown-item">Puma</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to='/Accesorios' className={`nav-link active ${styles.font}`} aria-current="page">
                                Accesorios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Nosotros' className={`nav-link active ${styles.font}`} aria-current="page">
                                Nosotros
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className={`form-control me-2 ${styles.input}`} type="search" placeholder="Buscar" aria-label="Buscar" />
                        <button className="btn btn-outline-info" type="submit">Buscar</button>
                    </form>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
