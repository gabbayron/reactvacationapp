import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Typography from "@material-ui/core/Typography";
import { Badge } from "@material-ui/core";
import moment from 'moment';
import CheckIcon from '@material-ui/icons/Check';

export default function SearchInputs({
    setFollowedVacations,
    setNotFollowedVacations,
    setSearchedVacations,
    allVacations,
    counter,
    setCounter
}) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const searchVacation = async () => {
        try {
            let res = await fetch( 'vacations/search', {
                method: "POST",
                headers: {
                    Authorization: localStorage.token || sessionStorage.token,
                    "content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        start_date: startDate,
                        end_date: endDate,
                        description
                    })
            })
            let data = await res.json()
            if (data.length > 0) {
                setFollowedVacations([])
                setNotFollowedVacations([])
                setSearchedVacations(data)
            } else {
                setError('Search Have No Results To Show :(')
                setTimeout(() => {
                    setError('')
                }, 2500);
            }
        } catch (error) {
            throw error
        }
    }

    const handleClear = () => {
        setCounter(counter + 1)
        setSearchedVacations([])
        setDescription('')
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
                <Typography paragraph variant='h6' align='center' color='textSecondary'>
                    Search Your Favorite Vacation
                </Typography>
                {/* Check if end date is earlier then the starting date  */}
                {endDate < startDate ? <h2 style={{ color: 'red', textAlign: "center" }}>Notice! Vacation End Date Is Not Valid!</h2> : ""}
            </div>
            <Grid item xs={12} container justify="space-around" alignContent="center" alignItems="center">

                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog1"
                    label="Starting Date"
                    format="MM/dd/yyyy"
                    minDate={startDate}
                    value={startDate}
                    renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {// Showing icons on dates with match
                        let allDates = allVacations.notFollowedVacations.map(vac => moment(vac.start_date).format('MMMM Do YYYY'))
                        allDates = [...allDates, ...allVacations.followedVacations.map(vac => moment(vac.start_date).format('MMMM Do YYYY'))]
                        const isSelected = isInCurrentMonth && allDates.includes(moment(day).format('MMMM Do YYYY'))
                        return <Badge badgeContent={isSelected ? <CheckIcon style={{ position: "relative", right: "20px" }} /> : undefined}>{dayComponent}</Badge>
                    }}
                    onChange={setStartDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog2"
                    label="Ending Date"
                    format="MM/dd/yyyy"
                    minDate={startDate}
                    value={endDate}
                    renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => { // Showing icons on dates with match
                        let allDates = allVacations.notFollowedVacations.map(vac => moment(vac.end_date).format('MMMM Do YYYY'))
                        allDates = [...allDates, ...allVacations.followedVacations.map(vac => moment(vac.end_date).format('MMMM Do YYYY'))]
                        const isSelected = isInCurrentMonth && allDates.includes(moment(day).format('MMMM Do YYYY'))
                        return <Badge badgeContent={isSelected ? <CheckIcon style={{ position: "relative", right: "20px" }} /> : undefined}>{dayComponent}</Badge>
                    }}
                    onChange={setEndDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <TextField id="standard-basic" label="Description" margin="normal" value={description} onChange={e => setDescription(e.target.value)} />

                <Button
                    endIcon={<SearchIcon />}
                    color="primary" edge='end'
                    variant="contained"
                    disabled={endDate < startDate ? true : false}
                    size="medium"
                    style={{ marginTop: '20px' }}
                    onClick={searchVacation}
                >

                    Search
                     </Button>
                <Button
                    endIcon={<HighlightOffIcon />}
                    color="primary"
                    edge='end'
                    variant="contained"
                    size="medium"
                    style={{ marginTop: '20px' }}
                    onClick={handleClear}
                >
                    Clear
                </Button>
            </Grid>
            <Typography style={{ marginTop: "3%" }} paragraph variant='h6' align='center' color='secondary'>
                {error}
            </Typography>
        </MuiPickersUtilsProvider >
    );
}