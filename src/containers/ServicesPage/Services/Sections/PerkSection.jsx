import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import perkStyle from "assets/jss/material-kit-react/views/servicePageSections/perkStyle.jsx";


const PerkSection = ({ classes, perks }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>KEUNTUNGAN</h5>
          <h2 className={classes.title}>Keuntungan Layanan</h2>
        </GridItem>
      </GridContainer>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", }}>
        {perks ? (
          perks.map((perk, index) => (
            <div className={classes.perkItem} key={index}>
              <div className={classes.perkItemBox} />
              {perk}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default withStyles(perkStyle)(PerkSection);