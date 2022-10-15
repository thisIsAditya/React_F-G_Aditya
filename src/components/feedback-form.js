import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { countries } from "../constants";
import { useState } from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 2),
}));

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    restrauntCleanliness: "",
    serviceQuality: "",
    beverageQuality: "",
    overallExperience: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Some Code here
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aromatic Bar
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledPaper>
        <Grid container>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ padding: "12px" }}>
              {/* Name */}
              <TextField
                label="Name"
                variant="outlined"
                onChange={handleChange}
                name="name"
                fullWidth
              />
              {/* Phone Number */}
              <Stack direction="row" spacing={2}>
                <Autocomplete
                  sx={{ width: 150 }}
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.phone}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                      key={option.code}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      +{option.phone}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      inputProps={{
                        ...params.inputProps,
                      }}
                    />
                  )}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  onChange={handleChange}
                  name="phone"
                  type="number"
                  fullWidth
                />
              </Stack>
            </Stack>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ padding: "12px" }}>
              {/* Email */}
              <TextField
                label="Email"
                variant="outlined"
                onChange={handleChange}
                name="email"
                fullWidth
              />
            </Stack>
          </Grid>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ padding: "12px" }}>
              <FormControl>
                <FormLabel>
                  Please rate the quality of service you recieved from the host
                </FormLabel>
                <RadioGroup row name="serviceQuality" onChange={handleChange}>
                  <FormControlLabel
                    value="excellent"
                    control={<Radio />}
                    label="Excellent"
                  />
                  <FormControlLabel
                    value="good"
                    control={<Radio />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="fair"
                    control={<Radio />}
                    label="Fair"
                  />
                  <FormControlLabel
                    value="bad"
                    control={<Radio />}
                    label="Bad"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Was our restraunt clean?</FormLabel>
                <RadioGroup
                  row
                  name="restrauntCleanliness"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="excellent"
                    control={<Radio />}
                    label="Excellent"
                  />
                  <FormControlLabel
                    value="good"
                    control={<Radio />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="fair"
                    control={<Radio />}
                    label="Fair"
                  />
                  <FormControlLabel
                    value="bad"
                    control={<Radio />}
                    label="Bad"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ padding: "12px" }}>
              <FormControl>
                <FormLabel>Please rate the quality of your beverage</FormLabel>
                <RadioGroup row name="beverageQuality" onChange={handleChange}>
                  <FormControlLabel
                    value="excellent"
                    control={<Radio />}
                    label="Excellent"
                  />
                  <FormControlLabel
                    value="good"
                    control={<Radio />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="fair"
                    control={<Radio />}
                    label="Fair"
                  />
                  <FormControlLabel
                    value="bad"
                    control={<Radio />}
                    label="Bad"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>
                  Please rete the overall dining experience.
                </FormLabel>
                <RadioGroup
                  row
                  name="overallExperience"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="excellent"
                    control={<Radio />}
                    label="Excellent"
                  />
                  <FormControlLabel
                    value="good"
                    control={<Radio />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="fair"
                    control={<Radio />}
                    label="Fair"
                  />
                  <FormControlLabel
                    value="bad"
                    control={<Radio />}
                    label="Bad"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Grid>
          {/* Submit Button  */}
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent={"end"}
              sx={{ padding: "12px" }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                sx={{ width: "fit-content" }}
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </StyledPaper>
    </>
  );
};

export default FeedbackForm;
