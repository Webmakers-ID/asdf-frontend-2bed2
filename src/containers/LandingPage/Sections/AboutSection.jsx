import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button"

import aboutStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.jsx";

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>CARI TAHU</h5>
          <h2 className={classes.title}>Tentang Kami</h2>
        </GridItem>
      </GridContainer>
      <div>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      </div>
      <div style={{
        paddingTop: "1.5rem"
      }}>
        <Button color="primary">Lihat Detail</Button>
      </div>
    </div>
  );
}

export default withStyles(aboutStyle)(AboutSection);
