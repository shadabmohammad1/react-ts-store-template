import React from "react";
import { Grid, Button } from "@material-ui/core";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";

import IconButton from "components/Core/IconButton";

export default function CommentBox() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TextareaAutosize
            className={classes.commentArea}
            minRows={7}
            placeholder="Empty"
          />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.actions}
        >
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <IconButton Icon={AttachFileIcon} />
              </Grid>
              <Grid item>
                <IconButton Icon={SentimentSatisfiedAltIcon} />
              </Grid>
              <Grid item>
                <IconButton Icon={AlternateEmailIcon} />
              </Grid>
              <Grid item>
                <IconButton Icon={MicIcon} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.sendButton}>
            <Button variant="contained" startIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  commentArea: {
    width: "90%",
    height: "200px",
    backgroundColor: "#161616",
    fontFamily: "Poppins-Regular",
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "#3F3F3F",
    fontSize: 10,
    padding: 10,
    color: "#FFF",
    borderBottom: "none",
  },
  actions: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#161616",
    border: "1px solid #3F3F3F",
    borderTop: "none",
    width: "95.3%",
    marginLeft: 10,
    "& .MuiSvgIcon-root": {
      fontSize: 14,
    },
  },
  sendButton: {
    "& .MuiButtonBase-root": {
      backgroundColor: "#45A580",
      color: "#FFF",
      textTransform: "none",
    },
  },
}));
