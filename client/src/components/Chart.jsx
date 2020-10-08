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
  ResponsiveContainer
} from "recharts";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";

export const Chart = () => {
  const [vacations, setVacations] = useState([])
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(  'vacations/chart', {
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
    <Container maxWidth="lg" style={{ justifyContent: 'center', alignItems: 'center', marginTop: "5%" }}>
      <Grid item xs={12}>
        <Typography variant='h2'
          align='center'
          color='textPrimary'
          paragraph >
          Followers Statistics
        </Typography>
        <ResponsiveContainer height="100%" minWidth="50%" aspect={2}>
          <BarChart
            data={vacations}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='destination' />
            <YAxis dataKey='followers' label={{ value: "Likes", angle: -90, position: "insideLeft" }} />
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
