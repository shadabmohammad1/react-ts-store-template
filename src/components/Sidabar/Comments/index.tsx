import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";

import IconButton from "components/Core/IconButton";
import Comment from "components/Sidabar/Comments/Comment";
import CommentBox from "components/Sidabar/Comments/CommentBox";

import comments from "./comments";

export default function IconButtonV2() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="subtitle2">
              Comments({comments.length})
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <IconButton Icon={FilterAltOutlinedIcon} />
              </Grid>
              <Grid item className={classes.pinIcon}>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<PushPinIcon />}
                  size="small"
                >
                  {comments.filter((comment) => comment.pinned).length} Pins
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12}>
            {comments.map((comment) => (
              <Comment
                name={comment.name}
                dp={comment.dp}
                content={comment.content}
                datetime={comment.datetime}
                tags={comment.tags}
                pinned={comment.pinned}
                liked={comment.liked}
                key={comment.id}
              />
            ))}
          </Grid>
          <CommentBox />
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  pinIcon: {
    color: "#FF7C03",
    "& .MuiButton-outlined": {
      border: "1px solid #464646",
    },
    "& .MuiButton-root": {
      textTransform: "none",
    },
    "& .MuiSvgIcon-root": {
      transform: "rotate(40deg)",
    },
  },
}));
