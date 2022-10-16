import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { countries } from "../../constants";
import { useState } from "react";
import { isEmail } from "utils";
import { isValidName, isValidPhone } from "utils/form";
import RatingRadioGroup from "./rating-radio-group";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 2),
}));

const StyledItemStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: {
      code: "IN",
      label: "India",
      phone: "91",
    },
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
    submit: "",
  });

  const handleChange = (e, countryValue) => {
    if (countryValue) {
      setForm({
        ...form,
        country: countryValue,
      });
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const checkNameValidation = () => {
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
    if (nameError.name) {
      return false;
    }
    return true;
  };

  const checkPhoneValidation = () => {
    let phoneError = {
      ...error,
      phone: "",
    };
    if (!form.phone) {
      phoneError = {
        ...error,
        phone: "Phone cannot be empty",
      };
    } else if (!isValidPhone(form.phone)) {
      phoneError = {
        ...error,
        phone: "Invalid Phone Number",
      };
    }
    setError(phoneError);
    if (phoneError.phone) {
      return false;
    }
    return true;
  };

  const checkEmailValidation = () => {
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
    if (emailError.email) {
      return false;
    }
    return true;
  };

  const handleValidation = (type) => {
    let formValidated = false;
    switch (type) {
      case "name":
        formValidated = checkNameValidation();
        break;
      case "phone":
        formValidated = checkPhoneValidation();
        break;
      case "email":
        formValidated = checkEmailValidation();
        break;
      default:
        if (
          !checkNameValidation() ||
          !checkPhoneValidation() ||
          !checkEmailValidation()
        ) {
          formValidated = false;
        } else {
          formValidated = true;
        }
    }
    return formValidated;
  };

  const handleSubmit = () => {
    if (!handleValidation()) {
      setError({
        ...error,
        submit: "Please fill the form correctly",
      });
      return;
    }
    if (error.name || error.phone || error.email) {
      setError({
        ...error,
        submit: "Please fill the form correctly",
      });
      return;
    }
    setError({
      ...error,
      submit: "",
    });
    const formData = {
      ...form,
      country: form.country.phone,
    };
    console.log(formData, "This is formData");
    navigate("/success");
  };
  return (
    <>
      <StyledPaper>
        <Grid container>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <StyledItemStack spacing={4}>
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
                  value={form.country}
                  onChange={(e, newValue) => handleChange(e, newValue)}
                  name="country"
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
            </StyledItemStack>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <StyledItemStack spacing={4}>
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
            </StyledItemStack>
          </Grid>
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <StyledItemStack spacing={4}>
              <RatingRadioGroup
                label="Please rate the quality of service you recieved from the host"
                value={form.serviceQuality}
                handleChange={handleChange}
                name="serviceQuality"
              ></RatingRadioGroup>

              <RatingRadioGroup
                label="Was our restraunt clean?"
                value={form.restrauntCleanliness}
                handleChange={handleChange}
                name="restrauntCleanliness"
              ></RatingRadioGroup>
            </StyledItemStack>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <StyledItemStack spacing={4}>
              <RatingRadioGroup
                label="Please rate the quality of your beverage"
                value={form.beverageQuality}
                handleChange={handleChange}
                name="beverageQuality"
              ></RatingRadioGroup>

              <RatingRadioGroup
                label="Please rete the overall dining experience."
                value={form.overallExperience}
                handleChange={handleChange}
                name="overallExperience"
              ></RatingRadioGroup>
            </StyledItemStack>
          </Grid>
          {/* Submit Button  */}
          <Grid item xs={12}>
            <StyledItemStack
              direction="row"
              justifyContent={"end"}
              spacing={2}
              alignItems="baseline"
            >
              <FormHelperText error={Boolean(error.submit)} required>
                &nbsp;
                {error.submit}
              </FormHelperText>
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                sx={{ width: "fit-content" }}
              >
                Submit
              </Button>
            </StyledItemStack>
          </Grid>
        </Grid>
      </StyledPaper>
    </>
  );
};

export default FeedbackForm;
