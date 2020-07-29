import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import WebIcon from "@material-ui/icons/Web";

const useStyle = makeStyles({
  root: {
    magin: 0,
    flexGrow: 1,
    fontSize: 24,
    paddingLeft: 30,
  },
  ButtonStyle: {
    background: "transparent",
  },
});

const NavBar = () => {
  const classes = useStyle();

  return (
    <AppBar
      position="static"
      style={{
        boxShadow: "none",
        background: "transparent",
      }}
    >
      <Toolbar>
        <Typography className={classes.root}>DuluthTravels</Typography>
        <Link href="https://www.facebook.com/ISSUMD">
          <IconButton>
            <FacebookIcon
              style={{
                color: "#4aa0c2",
                alignText: "right",
                fontSize: 35,
              }}
            />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/umd_iss/?hl=en">
          <IconButton>
            <InstagramIcon
              style={{
                color: "#d94141",
                alignText: "right",
                fontSize: 35,
              }}
            />
          </IconButton>
        </Link>
        <Link href="https://www.d.umn.edu/international-student-services/">
          <IconButton>
            <WebIcon
              style={{
                color: "#d94141",
                alignText: "right",
                fontSize: 35,
              }}
            />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
