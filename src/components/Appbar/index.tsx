import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Appbar.styles.scss"
const AppBarComponent = () => {
  return <div>
     <AppBar position="sticky" className="appBar">
      <Toolbar>
        <Typography className="appTitle"  variant="h6">
          Məlumatlar
        </Typography>
      </Toolbar>
    </AppBar>
  </div>;
};
export default AppBarComponent;
