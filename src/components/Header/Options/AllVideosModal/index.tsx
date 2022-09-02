// Third Party Import
import React, { useState, useMemo } from "react";
import {
  Grid,
  Typography,
  Modal,
  TextField,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";

// State Import
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  allVideosList,
  setSelectedVideos,
} from "store/preview-video/videoList";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function AllVideosModal({ open, handleClose }: Props) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState<string>("");
  const [videoIds, setVideoIds] = useState<number[]>([]);
  const allVideos = useAppSelector(allVideosList);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const addVideoId = (videoId: string) => {
    setVideoIds([...videoIds, +videoId]);
  };

  const removeVideoId = (videoId: string) => {
    const previousVideoIds = [...videoIds];
    previousVideoIds.splice(previousVideoIds.indexOf(+videoId), 1);
    setVideoIds([...previousVideoIds]);
  };

  const compareVideos = () => {
    console.log("compareVideos", videoIds);
    dispatch(setSelectedVideos(videoIds));
    setVideoIds([]);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container className={classes.container} spacing={2}>
        <Grid item md={12}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="body1">
                Select Versions to compare
              </Typography>
            </Grid>
            <Grid item>
              <CloseIcon onClick={handleClose} className={classes.closeIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Divider light className={classes.divider} />
        </Grid>
        <Grid item md={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={11}>
              <TextField
                size="small"
                placeholder="search for versions"
                label=""
                variant="outlined"
                className={classes.searchField}
                value={searchText}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={11}>
              <FormGroup>
                {allVideos.map((video, index) => (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          className={classes.checkbox}
                          value={video.id}
                          onChange={({ target }) =>
                            target.checked
                              ? addVideoId(target.value)
                              : removeVideoId(target.value)
                          }
                        />
                      }
                      label={video.name}
                    />
                    {index < allVideos.length - 1 ? (
                      <Divider className={classes.videoDiveder} />
                    ) : null}
                  </>
                ))}
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Divider light className={classes.divider} />
        </Grid>
        <Grid item md={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={compareVideos}
              >
                Compare
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    background: "#0F1014",
    boxShadow: "24px",
    padding: 10,
    width: "30%",
  },
  closeIcon: {
    cursor: "pointer",
    color: "#6C6A74",
  },
  searchField: {
    width: "100%",
    border: "1px solid #37383A",
    borderRadius: 5,
    "& .MuiInputBase-input": {
      color: "#FFFFFF",
    },
  },
  divider: {
    backgroundColor: "#606060",
  },
  videoDiveder: {
    backgroundColor: "#3A3A3A",
  },
  videoListContainer: {
    height: 250,
    overflowY: "scroll",
  },
  checkbox: {
    color: "#939393",
  },
}));
