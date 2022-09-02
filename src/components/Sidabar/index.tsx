import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";

import ExtendedPreviewSwitcher from "components/Sidabar/ExtendedPreviewSwitcher";
import Comments from "components/Sidabar/Comments";

export default function Sidebar() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={12}>
        <ExtendedPreviewSwitcher />
        <Divider className={classes.divider} />
        <Comments />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1C1E24",
    padding: 20,
  },
  divider: {
    backgroundColor: "#606060",
  },
}));
