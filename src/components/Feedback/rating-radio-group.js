import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function RatingRadioGroup({ handleChange, value, name, label }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} onChange={handleChange} value={value}>
        <FormControlLabel
          value="excellent"
          control={<Radio />}
          label="Excellent"
        />
        <FormControlLabel value="good" control={<Radio />} label="Good" />
        <FormControlLabel value="fair" control={<Radio />} label="Fair" />
        <FormControlLabel value="bad" control={<Radio />} label="Bad" />
      </RadioGroup>
    </FormControl>
  );
}

export default RatingRadioGroup;
