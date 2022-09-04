import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Drawer } from "@mui/material";
import React from "react";

import Comments from "components/PreviewVideo/Sidabar/Comments";
import ExtendedPreviewSwitcher from "components/PreviewVideo/Sidabar/ExtendedPreviewSwitcher";

interface Props {
  open: boolean;
}

const drawerWidth = 350;

export default function Sidebar({ open }: Props) {
  const classes = useStyles();
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      transitionDuration={1000}
      className={classes.drawer}>
      <Grid container className={classes.container}>
        <Grid item md={12}>
          <ExtendedPreviewSwitcher />
          <Divider className={classes.divider} />
          <Comments />
        </Grid>
      </Grid>
    </Drawer>
  );
}

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      backgroundColor: "#1C1E24",
    },
  },
  container: {
    backgroundColor: "#1C1E24",
    padding: 20,
  },
  divider: {
    backgroundColor: "#606060",
  },
}));
