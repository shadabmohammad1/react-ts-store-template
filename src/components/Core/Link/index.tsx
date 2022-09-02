import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  label: string;
  onClick?: () => void;
}

export default function Link({ label, onClick }: Props) {
  const classes = useStyles();
  return (
    <Button
      variant="text"
      className={classes.root}
      onClick={() => onClick && onClick()}
    >
      {label}
    </Button>
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
}));