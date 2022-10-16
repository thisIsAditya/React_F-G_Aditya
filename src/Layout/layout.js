import { Box } from "@mui/system";
import Header from "../components/Header";

const Layout = (Comp) => {
  return (
    <Box>
      <Header />
      <Comp />
    </Box>
  );
};

export default Layout;
