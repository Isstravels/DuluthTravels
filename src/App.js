import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import Header from "./header";
import Content from "./Content";
import NavBar from "./NavBar";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={12}>
          <Content />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

export default App;
