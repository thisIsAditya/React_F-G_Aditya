import { Button, Stack, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StyledStack = styled(Stack)(() => ({
  height: "90vh",
}));
const FormSuccess = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <StyledStack justifyContent={"center"} alignItems="center" spacing={1}>
      <CheckCircleIcon color="success" sx={{ fontSize: "80px" }} />
      <Typography variant="h6" color="secondary">
        Thank you for providing the Feedback
      </Typography>
      <Typography variant="body2">
        We will work toward improving your experience
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={handleClose}
        sx={{ width: "fit-content" }}
      >
        Close
      </Button>
    </StyledStack>
  );
};

export default FormSuccess;
