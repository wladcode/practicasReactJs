import React from "react";
import "./ds-input.scss";
import { Grid, TextField } from "@material-ui/core";

const DSFormInputFormikComponent = ({ handleChange, field, form: { touched, errors }, ...otherProps }) => {
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
                error={errors[field.name] ? true : false}
                helperText={errors[field.name] ? errors[field.name] : ""}
                {...otherProps}
            />
        </Grid>
    );
};

export default DSFormInputFormikComponent;
