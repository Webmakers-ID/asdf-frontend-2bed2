import React, { useState } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button"

import contactFormStyle from "assets/jss/material-kit-react/views/contactPageSections/contactFormStyle.jsx";

const ContactFormSection = ({ classes }) => {
  const [msg, setMsg] = useState("");

  const handleMsg = (e) => {
    setMsg(e.target.value);
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>FORM</h5>
          <h2 className={classes.title}>Pesan Proyek via WhatsApp</h2>
        </GridItem>
      </GridContainer>
      <div>
        {/* <CustomInput
          labelText="Nama"
          id="nama"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text"
          }}
        /> */}
        {/* <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "email"
          }}
        /> */}
        {/* <CustomInput
          labelText="No. Telp"
          id="telephone"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text"
          }}
        /> */}
        {/* <CustomInput
          labelText="Deskripsi"
          id="description"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text"
          }}
        /> */}
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <div className={classes.messageForm}>
            <CustomInput
              labelText="Pesan"
              id="message"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                onChange: handleMsg
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "25px" }}>
          <Button color="primary" disabled={msg ? false : true}>
            <a
              style={{ color: "unset" }}
              target="_blank"
              href={"https://wa.me/6285692970400?text=" + encodeURI(msg)}
            >
              Kirim Pesan
            </a>
          </Button>
      </div>
    </div>
  );
}

export default withStyles(contactFormStyle)(ContactFormSection);
