import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AddVacationModal({ counter, setCounter }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [start_date, setStartDate] = useState(new Date())
    const [end_date, setEndDate] = useState(new Date())
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [destination, setDestination] = useState('')
    const [country, setCountry] = useState('')
    const [img_src, setImgSrc] = useState('')

    const handleClick = async () => {
        try {
            await fetch('vacations/add', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: localStorage.token || sessionStorage.token
                },
                body: JSON.stringify({ destination, description, start_date, end_date, country, price, img_src })
            })
            setOpen(!open)
            setStartDate(new Date())
            setEndDate(new Date())
            setPrice(0)
            setDescription('')
            setDestination('')
            setCountry('')
            setImgSrc('')
            setCounter(counter + 1)
        } catch (error) {
            throw error
        }
    }

    return (
        <div style={{ marginTop: '7px' }}>
            <Button onClick={() => setOpen(!open)} variant='contained' color='primary' >Add Flight</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(!open)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h1 id="transition-modal-title" style={{ textAlign: "center" }}>Add Vacation :</h1>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container >
                                <Grid item xs={12} sm={3}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog1"
                                        label="Starting Date"
                                        format="MM/dd/yyyy"
                                        minDate={start_date}
                                        value={start_date}
                                        onChange={setStartDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog2"
                                        label="Ending Date"
                                        format="MM/dd/yyyy"
                                        minDate={start_date}
                                        value={end_date}
                                        onChange={setEndDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid   >
                                <Grid item xs={12} sm={3} >
                                    <TextField label="Destination" margin="normal" onChange={e => setDestination(e.target.value)} value={destination} />
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <TextField label="Country" margin="normal" onChange={e => setCountry(e.target.value)} value={country} />
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <TextField type="number" label="Price" margin="normal" onChange={e => setPrice(e.target.value)} value={price} />
                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <TextField type="text" label="Image Source" margin="normal" onChange={e => setImgSrc(e.target.value)} value={img_src} />
                                </Grid>

                                <Grid item xs={12} sm={3} >
                                    <h4>Description :</h4>
                                    <TextareaAutosize value={description} onChange={e => setDescription(e.target.value)} rowsMax={10} />
                                </Grid>
                            </Grid>
                            <div style={{ textAlign: "center" }} >
                                <Button
                                    onClick={handleClick}
                                    disabled={!description || !destination || end_date < start_date || !img_src || !country || !price ? true : false}
                                    variant='contained'
                                    color='primary'
                                >
                                    Add Flight !
                                      </Button>
                            </div>
                        </MuiPickersUtilsProvider >
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}