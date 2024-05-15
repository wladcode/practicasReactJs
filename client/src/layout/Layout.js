import React from "react";
import { Container } from "react-bootstrap";
import "./layout.css";
import MenuComponent from "./menu/Menu.component";
import NavbarCustome from "./navbar/Navbar";
import getYear from "../utils/dateUtils";

function Layout(props) {
    //const children = props.children;

    return (
        <article>
            <header>
                <NavbarCustome />
            </header>

            <main>
                <section className="d-none d-md-block">
                    <MenuComponent />
                </section>

                <Container fluid>{props.children}</Container>
            </main>

            <footer>WladeCode - {getYear()}</footer>
        </article>
    );
}

export default Layout;
