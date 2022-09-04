import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Picker, { SKIN_TONE_LIGHT, IEmojiData } from "emoji-picker-react";
import React, { useState } from "react";

import IconButton from "components/Core/IconButton";

export default function CommentBox() {
  const classes = useStyles();
  const [commentText, setCommentText] = useState("");
  const [showEmojiBox, setShowEmojiBox] = useState(false);

  function onEmojiClick(data: IEmojiData) {
    console.error(data);
    setCommentText(commentText + data.emoji);
  }

  return (
    <Grid container>
      <Grid item md={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <TextareaAutosize
            className={classes.commentArea}
            minRows={7}
            placeholder="Empty"
            value={commentText}
            onChange={({ target }) => setCommentText(target.value)}
          />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.actions}>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <IconButton Icon={AttachFileIcon} />
              </Grid>
              <Grid item>
                <IconButton
                  Icon={SentimentSatisfiedAltIcon}
                  onClick={() => setShowEmojiBox(!showEmojiBox)}
                />
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
      {showEmojiBox ? (
        <Picker
          onEmojiClick={(event, data) => onEmojiClick(data as IEmojiData)}
          disableAutoFocus
          native
          skinTone={SKIN_TONE_LIGHT}
        />
      ) : null}
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  commentArea: {
    width: "100%",
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
    // width: "95.3%",

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
