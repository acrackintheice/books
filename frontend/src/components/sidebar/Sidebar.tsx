import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EcoOutlinedIcon from "@material-ui/icons/EcoOutlined";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";
import TodayIcon from "@material-ui/icons/Today";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} variant="permanent" className="sidebar">
      <Divider />
      <Box className="userinfo section">
        <Box className="avatar">
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GgiYi6MB8ObbD5eaP81wNVNjLL7_ph1LotYZPDb=s96-c" />
        </Box>
        <Box className="name">
          <Typography color="textPrimary">Eduardo Demeneck</Typography>
        </Box>
        <Box className="mail">
          <Typography color="textSecondary">do.demeneck@gmail.com</Typography>
        </Box>
      </Box>
      <Divider />
      <Box className="navigation section">
        <List>
          <ListItem className="menuitem" key="0">
            <EcoOutlinedIcon />
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem className="menuitem" key="1" >
            <LocalCafeOutlinedIcon />
            <ListItemText>Listings</ListItemText>
          </ListItem>
          <ListItem className="menuitem" key="2">
            <BathtubOutlinedIcon />
            <ListItemText>Summary</ListItemText>
          </ListItem>
          <ListItem className="menuitem" key="3">
            <TodayIcon />
            <ListItemText>Today</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box className="credits section">One day we'll get there</Box>
    </Drawer>
  );
};

export default Sidebar;
