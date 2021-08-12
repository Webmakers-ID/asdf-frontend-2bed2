import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ServicesSection from "../LandingPage/Sections/ServicesSection.jsx";
import WorkSection from "../LandingPage/Sections/WorkSection.jsx";

class ServicesPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={require("assets/img/TopLandingBg1-wide.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Layanan Kami</h1>
                <h4>
                  ASDF Technology terdiri dari para ahli di bidang Desain dan Pembuatan Aplikasi
                  Digital. Berikut adalah layanan utama yang kami biasa berikan kepada
                  bisnis-bisnis modern.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <ServicesSection />
          <div className={classes.container}>
            <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ServicesPage);
