import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Moment from "react-moment";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import CardHeader from '@material-ui/core/CardHeader';
import DeleteIcon from '@material-ui/icons/Delete';
import EditVacationModal from "./EditVacationModal";

const Vacation = ({
  destination,
  description,
  img,
  start_date,
  end_date,
  price,
  followers,
  id,
  following,
  setCounter,
  country,
  counter,
  serachedVacations,
  setSearchedVacations,
  user
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoirte = async () => {
    try {
      fetch(`vacations/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          followers: following ? --followers : ++followers,
          order: following ? "REMOVE" : "ADD",
        }),
        headers: {
          Authorization: localStorage.token || sessionStorage.token,
          "content-type": "application/json",
        },
      });
      if (setSearchedVacations) {
        let newState = [...serachedVacations]
        let update = serachedVacations.find(vacation => vacation.id === id)
        let index = serachedVacations.indexOf(update)
        newState[index].followers = followers
        setSearchedVacations(newState)
      }
      setTimeout(() => {
        setCounter(counter + 1)
      }, 50);
    } catch (error) {
      throw error
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`vacations/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.token || sessionStorage.token,
        }
      })
      if (setSearchedVacations) {
        let newState = [...serachedVacations]
        let update = serachedVacations.find(vacation => vacation.id === id)
        let index = serachedVacations.indexOf(update)
        newState.splice(index, 1)
        setSearchedVacations(newState)
      }
      setCounter(counter + 1)
    } catch (error) {
      throw error
    }
  }

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },

    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    expand: {
      marginLeft: "auto",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6} md={3} >
        <Card>
          {user.role === "admin" ?
            <CardHeader style={{ justifyContent: 'space-around' }} action={
              <EditVacationModal country={country} price={price}
                start_date={start_date} end_date={end_date}
                destination={destination} img_src={img}
                description={description} id={id}
                counter={counter} setCounter={setCounter}
              />
            }
              avatar={
                <IconButton onClick={handleDelete} size="small">
                  <DeleteIcon />
                </IconButton>
              }
            /> : ''}

          <CardMedia
            className={classes.cardMedia}
            image={`${img}`}
            title={`${destination}`}
          />
          <CardContent className={classes.cardContent}>
            <Typography
              style={{ textAlign: "center" }}
              gutterBottom
              variant='h5'
              component='div'
            >
              <u>{destination}</u>
              <h4>Country : {country}</h4>
              <h4>Price : {price} $</h4>
              <h4>Dates :</h4>
              <h5>
                Starts : <Moment format='MMM Do YYYY'>{start_date}</Moment>{" "}
              </h5>
              <h5>
                Ends : <Moment format='MMM Do YYYY'>{end_date}</Moment>{" "}
              </h5>
              <h4>Followers : {followers}</h4>
            </Typography>
            {/* Collapse */}
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <Typography>{description}</Typography>
            </Collapse>
          </CardContent>
          <Typography
            component='div'
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <CardActions style={{ display: "flex" }}>
              <Button
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
                size='small'
                color='primary'
              >
                {expanded ? "Hide Info" : "Show More Info"}
              </Button>
              {user.role === "user" ? <IconButton
                aria-label='add to favorites'
                onClick={handleFavoirte}
              >
                <FavoriteIcon color={following ? "secondary" : "action"} />
              </IconButton>
                : null}

            </CardActions>
          </Typography>
        </Card>
      </Grid>
    </>
  );
};

export default Vacation;
