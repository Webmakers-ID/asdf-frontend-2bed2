import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button"

import contactFormStyle from "assets/jss/material-kit-react/views/contactPageSections/contactFormStyle.jsx";

const ContactFormSection = ({ classes }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>FORM</h5>
          <h2 className={classes.title}>Pesan Proyek</h2>
        </GridItem>
      </GridContainer>
      <div>
        <CustomInput
          labelText="Nama"
          id="nama"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text"
          }}
        />
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "email"
          }}
        />
        <CustomInput
          labelText="No. Telp"
          id="telephone"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text"
          }}
        />
        <CustomInput
          labelText="Deskripsi"
          id="description"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text"
          }}
        />
      </div>
      <div>
        <Button color="primary">Pesan Proyek</Button>
      </div>
    </div>
  );
}

export default withStyles(contactFormStyle)(ContactFormSection);
