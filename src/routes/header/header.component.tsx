// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";

import './header.styles.scss'

const navLinks = [
  { name: "home", href: "/", },
  { name: "projects", href: "/projects", },
  { name: "blog", href: "/blog", }
];

const Header = () => {
  return (
    <Fragment>
    <header className="my-header">
        <nav className="my-nav">
            <ul className="nav-list">
                {navLinks.map((nav, id) => (
                  <li key={id} className="nav-list-item">
                    <Link className="nav-link" to={nav.href}>{nav.name}</Link>
                </li>
                ))}
            </ul>
        </nav>
    </header>
    <Outlet />
    </Fragment>
  );
}

export default Header