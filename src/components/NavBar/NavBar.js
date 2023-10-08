import { Link, NavLink } from "react-router-dom";
import Cartwidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="navbar">
            <Link to={"/"}>
                <h1> Panfle </h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to={`/category/1`}><strong>Pan</strong></NavLink>
                    </li>

                    <li>
                        <NavLink to={`/category/2`}><strong>Dulce</strong></NavLink>
                    </li>


                </ul>
            </nav>

            <Cartwidget />

        </header>
    )
}

export default NavBar