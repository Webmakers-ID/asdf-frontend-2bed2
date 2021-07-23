import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

const linkActiveStyle = {
  borderBottom: "3px solid #50A7C2"
}

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          to="/"
          color="transparent"
          className={classes.navLink}
          activeStyle={linkActiveStyle}
        >
          Beranda
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/projects"
          color="transparent"
          className={classes.navLink}
          activeStyle={linkActiveStyle}
        >
          Proyek
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/services"
          color="transparent"
          className={classes.navLink}
          activeStyle={linkActiveStyle}
        >
          Layanan
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/team"
          color="transparent"
          className={classes.navLink}
          activeStyle={linkActiveStyle}
        >
          Tim ASDF
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/blog"
          color="transparent"
          className={classes.navLink}
          activeStyle={linkActiveStyle}
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="primary"
          to="/contacts"
          className={classes.navLink}
        >
          Pesan Sekarang
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
