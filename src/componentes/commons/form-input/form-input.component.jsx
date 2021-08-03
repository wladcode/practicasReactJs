import React from "react";
import "./form-input.scss";
import { Grid, TextField } from "@material-ui/core";

const DSFormInputComponent = ({ handleChange, ...otherProps }) => {
  return (
    <Grid item xs={12} sm={12}>
      <TextField
        variant="outlined"
        required
        fullWidth
        autoFocus
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        {...otherProps}
      />
    </Grid>
  );
};

export default DSFormInputComponent;
