import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    magin: 0,
    flexGrow: 1,
  },

  Typography: {
    flexGrow: 1,
    margin: 290,
    textAlign: "center",
    color: "white",
    variant: "overline",
    fontSize: 50,
    font: "Roboto",
    paddingBottom: 80,
  },
});

const Header = () => {
  const classes = useStyle();

  return (
    <AppBar
      position="static"
      style={{
        boxShadow: "none",
        background: "transparent",
        font: "Comic-Sans",
      }}
    >
      <Toolbar className={classes.root}>
        <Typography className={classes.Typography}>
          {
            " Welcome to Duluth!! We here at ISS hope this website helps you find great places to either go get a bite to eat, relax with nature, or just enjoy the Duluth city! "
          }
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
