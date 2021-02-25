import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import Home from "./Home";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleHome() {
    return <Home />;
  }
  function handleCreate() {}

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        onClick={handleHome}
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Create"
        onClick={handleCreate}
        icon={<AddIcon />}
      />
    </BottomNavigation>
  );
}
