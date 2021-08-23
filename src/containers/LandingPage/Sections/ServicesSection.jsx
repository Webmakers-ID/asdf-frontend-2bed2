import React from "react";
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import BgImage from "components/bg-image"

import servicesStyle from "assets/jss/material-kit-react/views/landingPageSections/servicesStyle.jsx";
import rectBlockSvg from "assets/img/landing-page/services-rectangle.svg"

const servicesList = [
  {
    title: "Web<br/>Development",
    desc: "Lorem ipsum dolor sit amet",
    img: "3. Our Service - Web Dev Section.png",
    url: "/services/web-development",
  },
  {
    title: "UI/UX<br/>Design",
    desc: "Lorem ipsum dolor sit amet",
    img: "3. Our Service - UIUX Section.png",
    url: "/services/",
  },
  {
    title: "Digital<br/>Marketing",
    desc: "Lorem ipsum dolor sit amet",
    img: "3. Our Service - Digital Marketing Section.png",
    url: "/services/",
  },
  {
    title: "Mobile App<br/>Development",
    desc: "Lorem ipsum dolor sit amet",
    img: "3. Our Service - Mobile App Section.png",
    url: "/services/",
  },
  {
    title: "Machine<br/>Learning",
    desc: "Lorem ipsum dolor sit amet",
    img: "3. Our Service - ML Section.png",
    url: "/services/",
  },
]

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div id="services" style={{
            position: "relative",
            bottom: "75px"
          }} />
          <h5 className={classes.description}>LAYANAN</h5>
          <h2 className={classes.title}>Layanan ASDF</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.servicesBlock}>
        {servicesList.map(({ title, desc, img, url }, index) => (
          <BgImage key={index} className={classes.oneService} imgName={img}>
            <div className={classes.serviceBlockLeft}>
              <img src={rectBlockSvg} alt="|" />
            </div>
            <div className={classes.serviceBlockRight}>
              <Link to={url} style={{ color: "unset" }}>
                <h3 dangerouslySetInnerHTML={{
                  __html: title
                }} />
              </Link>
            </div>
          </BgImage>
        ))}
      </div>
    </div>
  );
}

export default withStyles(servicesStyle)(ServicesSection);
