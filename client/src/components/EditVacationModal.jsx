import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from "@material-ui/core/IconButton";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
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

export default function EditVacationModal({ country, price, start_date, end_date, destination, img_src, description, id, setCounter, counter, }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(start_date)
    const [endDate, setEndDate] = useState(end_date)
    const [ePrice, setEprice] = useState(price)
    const [eDescription, setEdescription] = useState(description)
    const [eDestenation, setEdestenation] = useState(destination)
    const [eCountry, setEcountry] = useState(country)
    const [eImgSrc, setEimgsrc] = useState(img_src)

    const handleClick = async () => {
        try {
            await fetch(`vacations/edit/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: localStorage.token || sessionStorage.token,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    description: eDescription,
                    destination: eDestenation,
                    country: eCountry,
                    price: ePrice,
                    img_src: eImgSrc,
                    end_date: endDate,
                    start_date: startDate
                })
            })
            setCounter(counter + 1)
            setOpen(!open)
        } catch (error) {
            throw error
        }
    }
    return (
        <div style={{ marginTop: '7px' }}>
            <IconButton onClick={() => setOpen(!open)}>
                <EditIcon />
            </IconButton>
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
                style={{ overflow: "auto" }}
            >
                <Fade in={open}>
                    <div className={classes.paper} style={{ overflow: "scroll" }}>
                        <h1 id="transition-modal-title" style={{ textAlign: "center" }}>Edit Vacation To {eDestenation}</h1>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={3}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog1"
                                        label="Starting Date"
                                        format="MM/dd/yyyy"
                                        value={startDate}
                                        onChange={setStartDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog2"
                                        label="Ending Date"
                                        format="MM/dd/yyyy"
                                        minDate={startDate}
                                        value={endDate}
                                        onChange={setEndDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid   >
                                <Grid item xs={12} sm={6} md={3} >
                                    <TextField label="Destination" margin="normal" onChange={e => setEdestenation(e.target.value)} value={eDestenation} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} >
                                    <TextField label="Country" margin="normal" onChange={e => setEcountry(e.target.value)} value={eCountry} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} >
                                    <TextField type="number" label="Price" margin="normal" onChange={e => setEprice(e.target.value)} value={ePrice} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} >
                                    <TextField type="text" label="Image Source" margin="normal" onChange={e => setEimgsrc(e.target.value)} value={eImgSrc} />
                                </Grid>

                                <Grid item xs={12} sm={6} md={3} >
                                    <h4>Description :</h4>
                                    <TextareaAutosize value={eDescription} onChange={e => setEdescription(e.target.value)} rowsMax={10} />
                                </Grid>
                            </Grid>
                            <div style={{ textAlign: "center" }} >
                                <Button
                                    onClick={handleClick}
                                    disabled={!eDescription || !eDestenation || endDate < startDate || !eImgSrc || !eCountry || !ePrice ? true : false}
                                    variant='contained'
                                    color='primary'
                                    style={{ margin: "15px" }}
                                >
                                    Save Changes
                                      </Button>

                                <Button
                                    onClick={() => setOpen(!open)}
                                    variant='contained'
                                    color='primary'
                                    style={{ margin: "15px" }}
                                >
                                    Cancel
                                      </Button>
                            </div>
                        </MuiPickersUtilsProvider >
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}