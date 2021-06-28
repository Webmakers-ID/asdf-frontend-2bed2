import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import AttachMoney from "@material-ui/icons/AttachMoney";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import TrendingUp from "@material-ui/icons/TrendingUp"
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>Introducing</h5>
            <h2 className={classes.title} style={{
              marginTop: ".25rem"
            }}>Cloud Office Infrastructure</h2>
          </GridItem>
        </GridContainer>
        <div>
          <iframe width="900" height="506" src="https://www.youtube.com/embed/dH0yz-Osy54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Reduced IT Costs"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={AttachMoney}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Better Scalability"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={TrendingUp}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Improved Security"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
