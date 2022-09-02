import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import Header from "components/Header";
import VideoPlayer from "components/VideoPlayer";
import Sidebar from "components/Sidabar";

import { videoListAsync } from "store/preview-video/videoList";
import { AppDispatch } from "app/store";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(videoListAsync());
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item md={9} className={classes.primarySection}>
        <Grid container className={classes.headerSection}>
          <Grid item md={12}>
            <Header />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <VideoPlayer height={700} width="100%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: theme.palette.background.default,
    padding: 0,
  },
  headerSection: {
    height: 100,
  },
  primarySection: {
    padding: 20,
  },
}));

export default Home;
