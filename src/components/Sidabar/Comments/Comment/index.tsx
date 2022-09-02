import React from "react";
import { Grid, Avatar, Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

interface Props {
  dp: string;
  name: string;
  content: string;
  datetime: string;
  tags: string[];
  pinned: boolean;
  liked: boolean;
}

export default function Link({
  dp,
  name,
  content,
  datetime,
  tags,
  pinned,
  liked,
}: Props) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={11}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Avatar alt={name} src={dp} />
              </Grid>
              <Grid item>
                <Typography variant="body1">{name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className={classes.datetime}>
                  {datetime}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {pinned ? (
              <PushPinIcon className={classes.pinned} />
            ) : (
              <PushPinOutlinedIcon className={classes.notPinned} />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={1} className={classes.contentSection}>
          <Grid item md={12}>
            <Grid container spacing={1}>
              {tags.map((tag) => (
                <Grid item>
                  <Chip
                    size="small"
                    label={tag}
                    className={classes.tag}
                    key={tag}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Typography variant="body2">{content}</Typography>
          </Grid>
          {liked ? (
            <Grid item md={12} className={classes.likedIcon}>
              <Chip
                variant="outlined"
                size="small"
                icon={<ThumbUpIcon />}
                label={12}
              />
            </Grid>
          ) : (
            <Grid item md={12} className={classes.notLikedIcon}>
              <ThumbUpIcon />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#6BAFFF",
    textTransform: "none",
    fontSize: 12,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  tag: {
    backgroundColor: "green ",
    "& .MuiChip-label": {
      fontSize: 10,
      fontWeight: 700,
      color: "#FFF",
    },
  },
  datetime: {
    color: "#7A7A7A",
  },
  contentSection: {
    marginLeft: 45,
  },
  pinned: {
    color: theme.palette.error.main,
    "&.MuiSvgIcon-root": {
      fontSize: 18,
      transform: "rotate(40deg)",
    },
  },
  notPinned: {
    color: theme.palette.grey.A700,
    "&.MuiSvgIcon-root": {
      fontSize: 18,
      transform: "rotate(40deg)",
    },
  },
  likedIcon: {
    "& .MuiChip-outlined": {
      borderColor: "#5182FF",
    },
    "& .MuiSvgIcon-root": {
      fontSize: 14,
      color: "#5182FF",
      paddingLeft: 3,
      cursor: "pointer",
    },
    "& .MuiChip-label": {
      color: "#FFF",
      cursor: "pointer",
    },
  },
  notLikedIcon: {
    "& .MuiSvgIcon-root": {
      fontSize: 14,
      cursor: "pointer",
    },
  },
}));
