import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./layout.css";
import MenuComponent from "./menu/Menu.component";
import NavbarCustome from "./navbar/Navbar";

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

      <footer>Diamoncode - 2022 -</footer>
    </article>
  );
}

export default Layout;
