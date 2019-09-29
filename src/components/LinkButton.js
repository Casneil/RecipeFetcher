// React imports
import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";

// Material Imports
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const LinkButton = props => {
  //   console.log(props);
  const classes = useStyles();
  return (
    <div className="button">
      <Tooltip title="Visit Page">
        {/* <Link to={{ pathname: `${props.website}` }}> */}
        <Button
          //   href={`${props.website}`}
          className={classes.button}
          color="secondary"
        >
          Visit Website
        </Button>
        {/* </Link> */}
      </Tooltip>
    </div>
  );
};

export default LinkButton;
