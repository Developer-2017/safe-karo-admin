import React from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";

const AddVehicle = () => {
  return (
    <div>
  
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              Add Vehicle's Type
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField size="small" label="Vehicle Type" name="vehicle" />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
     
    </div>
  );
};

export default AddVehicle;
