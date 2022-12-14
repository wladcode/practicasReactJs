import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";

import "./Loader.css";

export default class Loader extends Component {
    render() {
        return (
            <>
                <CircularProgress color="inherit" />
                Cargando ...
                {/*
          <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        */}
            </>
        );
    }
}
