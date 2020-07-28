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
    fontSize: 60,
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
            " Welcome to Duluth! Hope this website helps you in finding out good places!"
          }
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
