import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import Vacations from "./components/Vacations";
import VerifyToken from "./components/SideEffects/VerifyToken";
import Box from '@material-ui/core/Box';

import Appbar from "./components/AppBar";
import { Chart } from "./components/Chart";
import Footer from "./components/Footer";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: pink[500],
      },
    },
  });

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <VerifyToken />
          <Appbar />
          <Route path='/register' exact component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/vacations' component={Vacations} />
          <Route path="/chart" component={Chart} />
          <Box m={5}>
            <Footer />
          </Box>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
