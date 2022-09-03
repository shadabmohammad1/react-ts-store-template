import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";

import { useAppDispatch, useAppSelector } from "app/hooks";
import IconButton from "components/Core/IconButton";
import {
  currentIndex,
  playingVideo,
  setNextVideo,
  setPreviousVideo,
  videoCount,
} from "store/preview-video/videoList";

export default function PreviewSwitcher() {
  const classes = useStyles();
  const index = useAppSelector(currentIndex);
  const video = useAppSelector(playingVideo);
  const totalVideos = useAppSelector(videoCount);
  const dispatch = useAppDispatch();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md="auto" className={classes.navigationButton}>
        <IconButton
          Icon={KeyboardArrowLeftIcon}
          onClick={() => {
            console.log("previousVideo");
            dispatch(setPreviousVideo());
          }}
        />
      </Grid>
      <Grid item md={8}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Typography variant="body2">Project: {video?.project}</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Typography variant="subtitle1">{video?.name}</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Typography variant="caption">
            {index + 1}/{totalVideos}
          </Typography>
        </Grid>
      </Grid>
      <Grid item md="auto">
        <IconButton
          Icon={KeyboardArrowRightIcon}
          onClick={() => dispatch(setNextVideo())}
        />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {},
  navigationButton: {
    // backgroundColor: theme.palette.background.paper,
  },
}));
