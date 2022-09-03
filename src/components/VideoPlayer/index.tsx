import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CropFreeIcon from "@mui/icons-material/CropFree";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchIcon from "@mui/icons-material/Search";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { useAppSelector } from "app/hooks";
import IconButton from "components/Core/IconButton";
import { playingVideo } from "store/preview-video/videoList";

interface Props {
  height?: number;
  width?: number | string;
}

function VideoPlayer({ height, width }: Props) {
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);
  const { video } = useAppSelector(playingVideo);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("ReactPlayer.canPlay(url)", ReactPlayer.canPlay(video));
  }, [video]);

  function play() {
    setPlaying(true);
  }

  function pause() {
    setPlaying(false);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item md={12}>
        <ReactPlayer
          controls
          playing={playing}
          url={video}
          height={height || 480}
          width={width || 720}
        />
      </Grid>
      <Grid item md={12}>
        <Grid
          container
          className={classes.playerButtonSection}
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Grid item md={3}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}>
              <Grid item>
                {playing ? (
                  <IconButton Icon={PauseIcon} onClick={() => pause()} />
                ) : (
                  <IconButton Icon={PlayArrowIcon} onClick={() => play()} />
                )}
              </Grid>
              <Grid item>
                <IconButton Icon={LoopOutlinedIcon} />
              </Grid>
              <Grid item>
                <Button color="secondary" style={{ textTransform: "none" }}>
                  1x
                </Button>
              </Grid>
              <Grid item>
                <IconButton Icon={VolumeUpIcon} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <Typography variant="body1">00:01/00.04</Typography>
          </Grid>
          <Grid item md={2}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}>
              <Grid item>
                <IconButton Icon={ModeEditIcon} />
              </Grid>
              <Grid item>
                <IconButton Icon={SearchIcon} />
              </Grid>
              <Grid item>
                <IconButton Icon={OpenWithIcon} />
              </Grid>
              <Grid item>
                <IconButton Icon={CropFreeIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
  },
  playerButtonSection: {
    backgroundColor: "#292929",
    padding: 0,
  },
}));

export default VideoPlayer;
