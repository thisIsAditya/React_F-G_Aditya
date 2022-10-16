import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)(() => ({
  flexGrow: 1,
}));

function Header() {
  return (
    <AppBar position="static" sx={{ height: "10vh" }}>
      <Toolbar>
        <StyledTypography variant="h6" component="div">
          Aromatic Bar
        </StyledTypography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
