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
import OurValuesSection from "./Sections/OurValues.jsx"
import OurTeamSection from "./Sections/OurTeam.jsx"
import WorkSection from "../LandingPage/Sections/WorkSection.jsx";

class TeamPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={require("assets/img/TopLandingBg1.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Welcome to The Team Page</h1>
                <h4>
                  ASDF Technology menghadirkan solusi digital untuk bisnis Anda. Mulai dari Pembuatan Aplikasi
                  Kustom, <i>Digital Marketing</i>, hingga <i>Artificial Intelligence</i>. Solusi yang kami buat
                  didesain untuk menyelesaikan masalah dengan efektif dan efisien.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <OurValuesSection />
            <OurTeamSection />
            <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(TeamPage);
