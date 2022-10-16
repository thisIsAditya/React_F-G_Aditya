import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledTypography = styled(Typography)(() => ({
  flexGrow: 1,
  cursor: "pointer",
  width: "fit-content",
}));

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ height: "10vh" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div>
          <StyledTypography
            variant="h6"
            align="left"
            onClick={() => navigate("/")}
          >
            Aromatic Bar
          </StyledTypography>
        </div>
        <div>
          <StyledTypography
            variant="h6"
            align="right"
            onClick={() => navigate("/admin")}
          >
            Admin
          </StyledTypography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
