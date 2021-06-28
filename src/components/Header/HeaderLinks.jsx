import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          to="/projects"
          color="transparent"
          className={classes.navLink}
        >
          Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/projects"
          color="transparent"
          className={classes.navLink}
        >
          Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/projects"
          color="transparent"
          className={classes.navLink}
        >
          Our Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/projects"
          color="transparent"
          className={classes.navLink}
        >
          Career
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/projects"
          color="transparent"
          className={classes.navLink}
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/projects"
          color="danger"
          className={classes.navLink}
          round
          style={{
            color: "white"
          }}
        >
          Contact Us
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
