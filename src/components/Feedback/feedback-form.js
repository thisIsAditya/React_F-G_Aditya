import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";

import { styled } from "@mui/system";
import { countries } from "../../constants";
import { useState } from "react";
import { isEmail } from "utils";
import { isValidName } from "utils/form";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 2),
}));

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    restrauntCleanliness: "excellent",
    serviceQuality: "excellent",
    beverageQuality: "excellent",
    overallExperience: "excellent",
  });

  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation = (type) => {
    switch (type) {
      case "name":
        let nameError = {
          ...error,
          name: "",
        };
        if (!form.name) {
          nameError = {
            ...error,
            name: "Name cannot be empty",
          };
        } else if (!isValidName(form.name)) {
          nameError = {
            ...error,
            name: "Name cannot include special characters or numbers",
          };
        }
        setError(nameError);
        break;
      case "phone":
        let phoneError = {
          ...error,
          phone: "",
        };
        if (!form.phone) {
          phoneError = {
            ...error,
            phone: "Phone cannot be empty",
          };
        } else if (!isValidName(form.phone)) {
          phoneError = {
            ...error,
            phone: "Invalid Phone Number",
          };
        }
        setError(phoneError);
        break;
      case "email":
        let emailError = {
          ...error,
          email: "",
        };
        if (!form.email) {
          emailError = {
            ...error,
            email: "Email cannot be empty",
          };
        } else if (!isEmail(form.email)) {
          emailError = {
            ...error,
            email: "Invalid email",
          };
        }
        setError(emailError);
        break;
      default:
        setError({
          name: "",
          phone: "",
          email: "",
        });
    }
  };

  const handleSubmit = () => {
    // Some Code here
  };
  return (
    <>
      <StyledPaper>
        <Grid container>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ padding: "12px" }}>
              {/* Name */}
              <FormControl>
                <TextField
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={() => handleValidation("name")}
                  name="name"
                  fullWidth
                />
                <FormHelperText error={Boolean(error.name)} required>
                  &nbsp;
                  {error.name}
                </FormHelperText>
              </FormControl>
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
                <FormControl fullWidth>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={() => handleValidation("phone")}
                    name="phone"
                    type="number"
                  />
                  <FormHelperText error={Boolean(error.phone)} required>
                    &nbsp;
                    {error.phone}
                  </FormHelperText>
                </FormControl>
              </Stack>
            </Stack>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ padding: "12px" }}>
              {/* Email */}
              <FormControl>
                <TextField
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={() => handleValidation("email")}
                  name="email"
                  fullWidth
                />
                <FormHelperText error={Boolean(error.email)} required>
                  &nbsp;
                  {error.email}
                </FormHelperText>
              </FormControl>
            </Stack>
          </Grid>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ padding: "12px" }}>
              <FormControl>
                <FormLabel>
                  Please rate the quality of service you recieved from the host
                </FormLabel>
                <RadioGroup
                  row
                  name="serviceQuality"
                  onChange={handleChange}
                  value={form.serviceQuality}
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

              <FormControl>
                <FormLabel>Was our restraunt clean?</FormLabel>
                <RadioGroup
                  row
                  name="restrauntCleanliness"
                  onChange={handleChange}
                  value={form.restrauntCleanliness}
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

                <RadioGroup
                  row
                  name="beverageQuality"
                  onChange={handleChange}
                  value={form.beverageQuality}
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

              <FormControl>
                <FormLabel>
                  Please rete the overall dining experience.
                </FormLabel>
                <RadioGroup
                  row
                  name="overallExperience"
                  onChange={handleChange}
                  value={form.overallExperience}
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
