import React from "react";
import Avatar from '@material-ui/core/Avatar';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Appbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  return (
    <AppBar className={classes.cardContent} position='sticky'>
      <Toolbar>
        <FlightTakeoffIcon className={classes.icon} />
        <Typography
          className={classes.title}
          variant='h6'
          color='inherit'
          noWrap
        >
          Bon Voyage
        </Typography>
        <Button
          onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            history.push("/login");
          }}
          edge='end'
          color='inherit'
        >
          {user.login ? "Log Out" : "Login"}
        </Button>
        {user.login ?
          <Button
            color="inherit"
            component={RouterLink}
            to="/vacations">
            Home
          </Button> : ''}

        {user.role === "admin" ?
          <Button color="inherit" component={RouterLink} to="/chart">
            Chart
          </Button> : ''}
        {user.login ? <Avatar className={classes.orange} style={{ marginLeft: "6px" }}>{user.fname[0].toUpperCase() + user.lname[0].toUpperCase()}</Avatar> : ""}
      </Toolbar>
    </AppBar >
  );
};

export default Appbar;
