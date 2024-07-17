import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Container, Grid } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function BookingForm() {
  const [tripStart, setTripStart] = useState(new Date());
  const [tripEnd, setTripEnd] = useState(new Date());
  const [pickup, setPickup] = useState({ address: '', link: '' });
  const [drop, setDrop] = useState({ address: '', link: '' });
  const [packageType, setPackageType] = useState('RoundTrip');
  const [carName, setCarName] = useState('');
  const [transmission, setTransmission] = useState('Manual');

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic here
    console.log({
      tripStart,
      tripEnd,
      pickup,
      drop,
      packageType,
      carName,
      transmission
    });
    alert('Booking confirmed!');
  };

  return (
    <Container className="container">
      <h1>Book Your Trip</h1>
      <form onSubmit={handleBooking}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                required
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <DesktopDateTimePicker
                label="Trip Start"
                value={tripStart}
                onChange={(newValue) => setTripStart(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={6}>
              <DesktopDateTimePicker
                label="Trip End"
                value={tripEnd}
                onChange={(newValue) => setTripEnd(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Pickup Address"
                fullWidth
                required
                value={pickup.address}
                onChange={(e) => setPickup({ ...pickup, address: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Pickup Location Link"
                fullWidth
                value={pickup.link}
                onChange={(e) => setPickup({ ...pickup, link: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Drop Address"
                fullWidth
                required
                value={drop.address}
                onChange={(e) => setDrop({ ...drop, address: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Drop Location Link"
                fullWidth
                value={drop.link}
                onChange={(e) => setDrop({ ...drop, link: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
              >
                <FormControlLabel value="RoundTrip" control={<Radio />} label="Round Trip" />
                <FormControlLabel value="Oneway" control={<Radio />} label="Oneway" />
                <FormControlLabel value="Monthly" control={<Radio />} label="Monthly" />
                <FormControlLabel value="Outstation" control={<Radio />} label="Outstation" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Car Name"
                fullWidth
                required
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              >
                <FormControlLabel value="Manual" control={<Radio />} label="Manual" />
                <FormControlLabel value="Automatic" control={<Radio />} label="Automatic" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained">
                Confirm Booking
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </form>
    </Container>
  );
}

export default BookingForm;
