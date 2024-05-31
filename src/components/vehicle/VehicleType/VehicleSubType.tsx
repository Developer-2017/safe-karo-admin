import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const VehicleSubType = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          Add Vehicle's Type
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select an option</InputLabel>
              <Select
                size="small"
                labelId="dropdown-label"
                id="dropdown"
                value={selectedOption}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="option1">PCV</MenuItem>
                <MenuItem value="option2">GCV</MenuItem>
                <MenuItem value="option3">Misc</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              size="small"
              label="Vehicle Sub Type"
              name="vehicleSubType"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default VehicleSubType;
