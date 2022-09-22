import React, { Fragment } from "react";

//import logo from "../../images/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LanguageComponent from "../commons/language/Languaje";
import "./Navbar.css";

import {
  AppBar,
  Badge,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { List } from "@material-ui/icons";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

class NavbarCustome extends React.Component {
  state = {
    open: true,
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const {open} = this.state;
    return (
      <Fragment>
        <Navbar bg="primary" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <Link className="Navbar_brand" to="/">
                <img
                  className="Navbar_brand-logo"
                  src="https://robohash.org/chamow1?size=50x50"
                  alt="Logo"
                />
                <span className="font-weight-light">Go to home</span>
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <div>
              <LanguageComponent />
            </div>
          </Container>
        </Navbar>

        <div>
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => this.toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={()=> this.toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">

              <Divider sx={{ my: 1 }} />
            </List>
          </Drawer>
        </div>
      </Fragment>
    );
  }
}

export default NavbarCustome;
