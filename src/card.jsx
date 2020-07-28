import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },

  media: {
    height: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const { ImgSrc, title, description, link, link2 } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia style={{ height: "200px" }} image={ImgSrc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={link}>
          <Button size="small" color="primary">
            Directions
          </Button>
        </Link>
        <Link href={link2}>
          <Button size="small" color="primary">
            More Information
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
