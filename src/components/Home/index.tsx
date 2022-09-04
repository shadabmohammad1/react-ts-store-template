import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";

import { useAppDispatch } from "app/hooks";
import PreviewVideo from "components/PreviewVideo/index";
import { videoListAsync } from "store/preview-video/videoList";

function Home() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(videoListAsync());
  }, [dispatch]);

  return (
    <Grid container className={classes.root}>
      <PreviewVideo />
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: theme.palette.background.default,
    padding: 0,
  },
}));

export default Home;
