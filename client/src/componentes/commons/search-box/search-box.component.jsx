import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { Fragment } from "react";
import "./search-box.styles.css";

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <Fragment>
      <TextField
        onChange={handleChange}
        id="standard-basic"
        label={placeholder}
        type="search"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />

    </Fragment>
  );
}
