import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from "recharts";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useEffect } from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));


export const Chart = () => {
  const [vacations, setVacations] = useState([])
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch('http://localhost:1000/vacations/chart', {
          headers: { Authorization: localStorage.token || sessionStorage.token }
        })

        let data = await res.json()
        setVacations(data.filter(vacation => vacation.followers > 0))
      } catch (error) {
        throw error
      }
    })()
  }, [])


  return (
    <Container maxWidth="lg" className={classes.container} style={{ height: "60%" }}   >
      <Typography variant='h2'
        align='center'
        color='textPrimary'
        gutterBottom
        style={{ marginBottom: "50px" }}
      >
        Followers Statistics :
        </Typography>
      <Grid item xs={12} md={12} lg={12} justify="center" style={{ width: "95%", height: "100%" }} >
        <ResponsiveContainer  >
          <BarChart
            data={vacations}
            margin={{
              top: 0,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='destination' />
            <YAxis dataKey='followers'  >
              <Label
                angle={270}
                position="left"
                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
              >
                Followers
            </Label>
            </YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey='followers' fill='#F30761'>
              {vacations.map((vacation, index) => (
                <Cell key={`cell-${index}`} fill='#2ABB7C' />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Container>

  );
}
