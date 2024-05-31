import React, { useState } from "react";
//import { useTranslation } from "react-i18next";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  TextField as RegistrationDateTime,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import { ConvertToBase64 } from "../../../utils/ConvertToBase64";
//import CloudUploadIcon from "@material-ui/icons/CloudUpload";
dayjs.extend(utc);

const AddPolicy = () => {
  //  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");
  const today: Dayjs = dayjs();
  // defaultStartDate, defaultEndDate are the current time based on the browser's time, but have no timezone information
  const defaultStartDate = dayjs(today).format("YYYY-MM-DD HH:mm");

  const [registrationStartDate, setRegistrationStartDate] = useState<
    string | null | undefined
  >(defaultStartDate);

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleChangeRegistrationStartDate = (newStartDate: Dayjs | null) => {
    // registrationStartDate is set to a string with the browser's current time, but does not retain timezone information
    setRegistrationStartDate(newStartDate?.format("YYYY-MM-DD HH:mm"));
  };
  const [mobileImage, setMobileImage] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const handleFileInputChange = (e: any) => {
    if (e.target.value) {
      var file = e.target.files[0];
      const fileSize = e.target.files[0].size / 1024;
      if (fileSize > 256) {
        setErrorMessage("Image is incorrect size.");
      } else {
        setErrorMessage("");
        ConvertToBase64(file)
          .then((result) => {
            file["base64"] = result;
            setMobileImage(file.base64);
            // initialValues.image = file.base64;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } else {
      //initialValues.image = Dummy;
      //setMobileImage();
      const fileInput = document.getElementById("file") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = ""; // Reset the value of the file input
      }
    }
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          Motor Policy
        </Typography>
        <Typography variant="h6" gutterBottom>
          Add Motor Policy Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Policy Type</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Case Type</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Product</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">
                Select Insurance Company
              </InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Broker</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Make</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Model</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Fuel Type</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select RTO</InputLabel>
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
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Seating Capacity"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              label="Enter CC"
              fullWidth
              name="roleName"
            />
          </Grid>
          {/* <Grid item md={3} xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DateTimePicker
                  // disablePast={disableStartTime}
                  // label={[t("Start Date & Time")].join("")}
                  label="Start Date & Time"
                  value={registrationStartDate}
                  onChange={handleChangeRegistrationStartDate}
                  renderInput={(params: any) => (
                    <RegistrationDateTime size="small" {...params} />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </Grid> */}
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Registration Date"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select NCB</InputLabel>
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
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Vehicle Number"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Policy Number"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Full Name"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Email Id"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              label="Enter Mobile Number"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              type="number"
              label="Enter MFG Year"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              type="number"
              label="Enter Tenure"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Issue Date"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter End Date"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter IDV"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter OD"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter TP"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              label="Enter Net Premium"
              name="roleName"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              size="small"
              label="Enter Final Premium"
              name="roleName"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Payment Mode</InputLabel>
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
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="dropdown-label">Select Made by</InputLabel>
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
          <Grid item xs={11}>
            <Typography>{"Upload/Select  Image"}</Typography>
            <input
              id="file"
              type="file"
              name="file"
              onChange={handleFileInputChange}
              style={{
                border: "1px solid #c4c4c4",
                padding: "5px",
                width: "100%",
                borderRadius: "5px",
              }}
            />
            <Typography variant="body1" gutterBottom mr={4}>
              {"Image should be 100x100 pixels and must be <= 256KB."}
              <span style={{ color: "red" }}> {errorMessage}</span>
            </Typography>
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

export default AddPolicy;
