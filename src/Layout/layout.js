import { Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "95vh",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  boxSizing: "border-box",
  height: "90%",
}));
const Layout = (Comp) => {
  return (
    <StyledBox>
      <Header />
      <StyledPaper>
        <Comp />
      </StyledPaper>
    </StyledBox>
  );
};

export default Layout;
