import { AppBar, Toolbar, Typography } from "@mui/material";

const AppBarComponent = () => {
  return <div>
     <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          Məlumatlar
        </Typography>
      </Toolbar>
    </AppBar>
  </div>;
};
export default AppBarComponent;
