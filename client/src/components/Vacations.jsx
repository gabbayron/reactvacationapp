import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { useSelector } from "react-redux";
import Vacation from "./Vacation";
import SearchInputs from "./SearchInputs";
import AddVacationModal from '../components/AddVacationModal'
import { server } from '../config/index'


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
}));

export default function Vacations() {
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const [allVacations, setAllVacations] = useState([])
  const [followedVacations, setFollowedVacations] = useState([]);
  const [notFollowedVacations, setNotFollowedVacations] = useState([]);
  const [serachedVacations, setSearchedVacations] = useState([]);
  const [counter, setCounter] = useState(0);
  const [liked, setLiked] = useState([])

  useEffect(() => {
    (async () => {
      try {
        if (user.login) {
          let res = await fetch(server + `/vacations`, {
            headers: { Authorization: localStorage.token || sessionStorage.token }
          });
          let allVacations = await res.json();
          setAllVacations(allVacations)
          setNotFollowedVacations(allVacations.notFollowedVacations);
          setFollowedVacations(allVacations.followedVacations)
          setLiked(allVacations.followedVacations.map(vacation => vacation.id))
          console.log('usefect calleddd')
        }
        return null;
      } catch (error) {
        throw error
      }
    })();
  }, [counter, user.login, user.userid]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth='md'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Bon Voyage {user.fname} {user.lname}
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color='textSecondary'
              paragraph
            >
              Welcome to your travel manager app
              {` ${user.fname} ${user.lname}`}! Here you can find valuable
              information about the best destenations for your vacation! <br />
              Have fun !
            </Typography>
          </Container>
        </div>
        <Container maxWidth="md" >
          <SearchInputs
            setFollowedVacations={setFollowedVacations}
            setNotFollowedVacations={setNotFollowedVacations}
            setSearchedVacations={setSearchedVacations}
            allVacations={allVacations}
            counter={counter}
            setCounter={setCounter}
          />
        </Container>
        {user.role === "admin" ?
          <Container style={{ textAlign: "center" }} maxWidth="md" >
            <AddVacationModal counter={counter} setCounter={setCounter} />
          </Container>
          : null}

        {/* Searched Vacations */}
        {serachedVacations.length > 0 ?

          <h1 style={{ textAlign: "center" }}> Here Is Your Search Results :</h1> : ""}

        {serachedVacations.length > 0 ?
          (<Container className={classes.cardGrid} maxWidth='lg'>
            <Grid
              justify="flex-start"
              container
              spacing={3}
            >
              {serachedVacations.map((vacation) => (
                <Vacation
                  key={vacation.id}
                  id={vacation.id}
                  description={vacation.description}
                  destination={vacation.destination}
                  country={vacation.country}
                  img={vacation.img_src}
                  start_date={vacation.start_date}
                  end_date={vacation.end_date}
                  price={vacation.price}
                  followers={vacation.followers}
                  following={liked.includes(vacation.id) ? true : false}
                  setVacations={setFollowedVacations}
                  setCounter={setCounter}
                  counter={counter}
                  serachedVacations={serachedVacations}
                  setSearchedVacations={setSearchedVacations}
                  user={user}
                />
              ))}
            </Grid>
          </Container>)
          : ""
        }
        {serachedVacations.length === 0 ? (
          <Container className={classes.cardGrid} maxWidth='lg'>
            {user.role === "admin" ? null :
              <Typography
                component='h2'
                variant='h3'
                align='center'
                color='textPrimary'
                gutterBottom
                style={{ marginBottom: "5%" }}
              >
                Vacations You Followed :
         </Typography>}

            {/* Followed Vacations */}
            <Grid
              justify={followedVacations.length > 0 ? "flex-start" : "center"}
              container
              spacing={3}
            >
              {followedVacations.length > 0 ? (
                followedVacations.map((vacation) => (
                  <Vacation
                    key={vacation.id}
                    id={vacation.id}
                    description={vacation.description}
                    destination={vacation.destination}
                    country={vacation.country}
                    img={vacation.img_src}
                    start_date={vacation.start_date}
                    end_date={vacation.end_date}
                    price={vacation.price}
                    followers={vacation.followers}
                    following={true}
                    setVacations={setFollowedVacations}
                    setCounter={setCounter}
                    counter={counter}
                    user={user}

                  />
                ))
              ) : (
                  user.role === "admin" ? null :
                    <Typography
                      component='h4'
                      variant='h4'
                      align='center'
                      color='textSecondary'
                      style={{ margin: "5%" }}
                    >
                      You Havent Followed Any Vacation Yet...
              </Typography>


                )}
            </Grid>
            <Typography
              component='h2'
              variant='h3'
              align='center'
              color='textPrimary'
              gutterBottom
              style={{ margin: "3%" }}
            >
              {user.role === "admin" ? "All Vacations :" : "Vacations You Didn't Followed :"}
            </Typography>
            {/* Not Followed Vacations */}
            <Grid
              justify={notFollowedVacations.length > 0 ? "flex-start" : "center"}
              container
              spacing={4}
            >
              {notFollowedVacations.length > 0 ? (
                notFollowedVacations.map((vacation) => (
                  <Vacation
                    key={vacation.id}
                    id={vacation.id}
                    description={vacation.description}
                    destination={vacation.destination}
                    country={vacation.country}
                    img={vacation.img_src}
                    start_date={vacation.start_date}
                    end_date={vacation.end_date}
                    price={vacation.price}
                    followers={vacation.followers}
                    following={false}
                    setVacations={setNotFollowedVacations}
                    setCounter={setCounter}
                    counter={counter}
                    user={user}
                  />
                ))
              ) : (
                  <Typography
                    component='h4'
                    variant='h4'
                    align='center'
                    color='textSecondary'
                    style={{ margin: "5%" }}
                  >
                    You Have Followed All Of Our Vacations...
                  </Typography>
                )}
            </Grid>
          </Container>) : null}

      </main>
    </React.Fragment>
  );
}
