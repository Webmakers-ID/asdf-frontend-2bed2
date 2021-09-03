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
import ServicesSection from "../../LandingPage/Sections/ServicesSection.jsx";
import WorkSection from "../../LandingPage/Sections/WorkSection.jsx";
import ProjectSection from "../../LandingPage/Sections/ProjectSection.jsx"
import PerkSection from "./Sections/PerkSection.jsx"

class WebDevelopmentPage extends React.Component {
  render() {
    const { classes } = this.props;
    const perkList = [
      "Good SEO Score",
      "Responsive",
      "Expert Team",
      "Highly Customizeable",
      "Fully Tested",
    ];

    return (
      <div>
        <Parallax image={require("assets/img/LayananBg1-wide.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Layanan Web Development</h1>
                <h4>
                  Layanan Web Development kami Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div>
              <PerkSection perks={perkList} />
              <ProjectSection services={"Web Development"} />
            </div>
          </div>
          <ServicesSection />
          <WorkSection />
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(WebDevelopmentPage);
