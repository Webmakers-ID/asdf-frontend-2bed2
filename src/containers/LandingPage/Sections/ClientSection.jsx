import React from "react";
import Slider from "react-slick"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button"
import Image from "components/image"

import clientStyle from "assets/jss/material-kit-react/views/landingPageSections/clientStyle.jsx";

const clientList = [
  {
    name: "Abc",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "Def",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "Ghi",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "Jkl",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "Cba",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "Fed",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "Igh",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "Lkj",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "312",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "544",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "222",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "111",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "432",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "775",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "555",
    logo: "taman-siswa-logo.png"
  },
  {
    name: "444",
    logo: "taman-siswa-logo.png"
  },
]

const ClientSection = ({ classes }) => {
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: (
      <div>
        <Image style={{ width: "65%" }} imgName="rightarrow.png" alt="next" />
      </div>
    ),
    prevArrow: (
      <div>
        <Image style={{ width: "65%" }} imgName="leftarrow.png" alt="next" />
      </div>
    ),
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>KLIEN</h5>
          <h2 className={classes.title}>Klien Kami</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.flex}>
        <div className={classes.flexLeft}>
          <Slider className={classes.slider} {...settings}>
            {clientList.map((client, index) => (
              <div className={classes.clientBox} key={index}>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%" }}>
                    <Image imgName={client.logo} alt={client.name} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={classes.flexRight}>
          asdasdads
        </div>
      </div>
    </div>
  );
}

export default withStyles(clientStyle)(ClientSection);
