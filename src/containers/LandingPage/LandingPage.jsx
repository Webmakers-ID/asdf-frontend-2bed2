import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={require("assets/img/TopLandingBg1.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Enterprise-Grade Digital Solutions for your Business</h1>
                <h4>
                  We are a team of experts in Web Application, Big Data, and Artificial Intelligence.
                  We provide enterprises with the necessary technology to solve their
                  business problems.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  to="/services"
                  round
                >
                  Our Services
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
