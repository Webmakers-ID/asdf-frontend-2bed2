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
            <h5 className={classes.description}>PERKENALAN</h5>
            <h2 className={classes.title}>Produk Kami</h2>
          </GridItem>
        </GridContainer>
        <div className={classes.videoplayer}>
          <iframe src="https://www.youtube.com/embed/nGFmH4w3V8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
