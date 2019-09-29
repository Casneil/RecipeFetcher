// import React, { useState } from "react";
// import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { createMuiTheme } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },

//   button: {
//     margin: theme.spacing(1)
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   }
// }));

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#ff6d00",
//       contrastText: "#fff"
//     },
//     secondary: {
//       main: "#00e676",
//       contrastText: "#fff"
//     }
//   }
// });

// const Search = props => {
//   const classes = useStyles();
//   return (
//     <MuiThemeProvider theme={theme}>
//       <div>
//         <form onSubmit={props.submit}>
//           <TextField
//             onSubmit={props.search}
//             id="standard-with-placeholder"
//             label=""
//             placeholder="Search Recipes"
//             className={classes.textField}
//             margin="normal"
//             onChange={props.search}
//           />

//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             onClick={props.submit}
//           >
//             Search
//           </Button>
//         </form>
//       </div>
//     </MuiThemeProvider>
//   );
// };

// export default Search;
