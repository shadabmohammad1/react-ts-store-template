import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import React from "react";

import IconButton from "components/Core/IconButton";
import Link from "components/Core/Link";

export default function ExtendedPreviewSwitcher() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Grid item md="auto">
            <Typography variant="subtitle2">Version (4)</Typography>
          </Grid>
          <Grid item md="auto">
            <Link label="View all" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start">
            <Grid item md={10}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}>
                <Grid item md="auto">
                  <IconButton Icon={KeyboardArrowLeftIcon} />
                </Grid>
                <Grid item md="auto">
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    <LocalMoviesIcon className={classes.icon} />
                    <Typography variant="subtitle2">BUNNY _080_0200</Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item md="auto">
                      <Typography variant="body2">Artist</Typography>
                    </Grid>
                    <Grid item md="auto">
                      <Typography variant="body2">:</Typography>
                    </Grid>
                    <Grid item md="auto">
                      <Link label="shotgun support" />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Link label="View more" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md="auto">
              <IconButton Icon={KeyboardArrowRightIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: "0px !important",
    borderRadius: "5px !important",
  },
  icon: {
    color: "#D3D1D1",
  },
}));
