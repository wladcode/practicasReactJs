import React from "react";

import Loader from "./Loader";
import "./PageLoading.css";

import Backdrop from "@material-ui/core/Backdrop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function PageLoading({ show }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  //return <div className="PageLoading"><Loader /></div>;

  return (
    <Backdrop className={classes.backdrop} open={show} onClick={handleClose}>
      <Loader />
    </Backdrop>
  );
}

export default PageLoading;
