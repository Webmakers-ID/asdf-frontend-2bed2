import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button"

import clientStyle from "assets/jss/material-kit-react/views/landingPageSections/clientStyle.jsx";

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>KLIEN</h5>
          <h2 className={classes.title}>Klien Kami</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.flex}>
        <div className={classes.flexLeft}>
          
        </div>
        <div className={classes.flexRight}>
          
        </div>
      </div>
    </div>
  );
}

export default withStyles(clientStyle)(AboutSection);
