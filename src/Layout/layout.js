import { Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "auto",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  boxSizing: "border-box",
  height: "90vh",
}));
const Layout = (Comp, props) => {
  return (
    <StyledBox>
      <Header />
      <StyledPaper>
        <Comp {...props} />
      </StyledPaper>
    </StyledBox>
  );
};

export default Layout;
