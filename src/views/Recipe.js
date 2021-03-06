// React Imports
import React, { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";

import { API_KEY, APP_ID } from "../key";

// Material Imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minHeight: 600,
    maxHeight: 600,
    margin: "auto",
    marginBottom: 10,
    marginTop: 25,
    objectFit: "cover",
    paddingBottom: 0
  },
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  media: {
    height: 0,
    objectFit: "cover",
    paddingTop: "56.25%" // 16:9
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const Recipe = props => {
  const classes = useStyles();

  const heroku = "https://cors-anywhere.herokuapp.com/";

  // Edaman Api

  const api_request = `${heroku}https://api.edamam.com/search?q=${props.recipes}&app_id=${APP_ID}&app_key=${API_KEY}`;

  const [recipes, setRecipes] = useState([]);

  //Edaman
  const getRecipes = async () => {
    const response = await fetch(api_request);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits[0]);
  };

  useEffect(() => {
    getRecipes();
  }, [props.recipes]);

  return (
    // <div className={classes.card}>
    <Grid container className={classes.root}>
      {recipes.map(recipe => (
        <Grid key={recipe.recipe.image}>
          <Card className={classes.card}>
            <CardHeader
              title={
                recipe.recipe.label.length <= 20
                  ? `${recipe.recipe.label}`
                  : `${recipe.recipe.label.substring(0, 24)}...`
              }
              subheader={recipe.recipe.source}
            />
            <CardMedia
              className={classes.media}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {recipe.recipe.ingredientLines.length >= 12
                  ? `${recipe.recipe.ingredientLines}`
                  : `${recipe.recipe.ingredientLines}`}
              </Typography>
            </CardContent>
            <LinkButton website={recipe.recipe.url} />
          </Card>
        </Grid>
      ))}
    </Grid>
    // </div>
  );
};

export default Recipe;
