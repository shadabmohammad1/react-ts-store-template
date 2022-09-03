import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import React, { useState } from "react";

import IconButton from "components/Core/IconButton";

import AllVideosModal from "./AllVideosModal";

export default function Options() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      spacing={2}>
      <Grid item>
        <IconButton
          Icon={ShareOutlinedIcon}
          variant="outlined"
          color="secondary"
        />
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="outlined"
          className={classes.compareButton}
          onClick={() => handleOpen()}>
          Compare
        </Button>
        <AllVideosModal open={open} handleClose={handleClose} />
      </Grid>
      <Grid item>
        <IconButton
          Icon={TableChartOutlinedIcon}
          variant="outlined"
          color="secondary"
        />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {},
  compareButton: {
    padding: "5px 40px",
    "& .MuiButton-label": {
      textTransform: "none",
    },
  },
}));
