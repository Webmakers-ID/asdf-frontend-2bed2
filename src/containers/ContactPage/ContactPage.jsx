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
import ContactFormSection from "./Sections/ContactFormSection.jsx"
import ContactFAQSection from "./Sections/ContactFAQSection"

class ContactPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={require("assets/img/TopLandingBg1.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Contact Us</h1>
                <h4>
                  Dapatkan estimasi biaya proyek gratis dari kami. Tulis data diri Anda di bawah ini dan tim
                  kami akan menghubungi Anda.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ContactFormSection />
            <ContactFAQSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ContactPage);
