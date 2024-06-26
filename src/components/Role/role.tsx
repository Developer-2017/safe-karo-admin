import React from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";

const role = () => {
  return (
    <>
    
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              Add Role's
            </Typography>

            <Grid container spacing={2}>
            
              <Grid item xs={12}>
                <TextField size="small" label="Enter Role Name" name="roleName" />
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

export default role;
