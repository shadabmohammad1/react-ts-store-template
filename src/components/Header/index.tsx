import React from "react";
import { Grid } from "@material-ui/core";

import PreviewSwitcher from "./PreviewSwitcher";
import Options from "./Options";

export default function Header() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={4} />
      <Grid item md={4}>
        <PreviewSwitcher />
      </Grid>
      <Grid item md={4}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Options />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
