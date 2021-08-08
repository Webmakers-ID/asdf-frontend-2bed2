import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Image from "components/image"

import ourTeamStyle from "assets/jss/material-kit-react/views/teamPageSections/ourTeamStyle.jsx";

const memberList = [
  {
    imgName: "alghi.jpg",
    title: "Firdaus Al-Ghifari",
    desc: "Chief Executive Officer"
  },
  {
    imgName: "dzikra.jpg",
    title: "M. Dzikra Muzaki",
    desc: "Head of Design"
  },
  {
    imgName: "shinta.jpg",
    title: "Shinta Fauziah",
    desc: "Digital Marketing Staff"
  },
  {
    imgName: "tn.jpg",
    title: "Alghifari Taufan N.",
    desc: "Web Designer"
  },
  {
    imgName: "tasput.jpg",
    title: "Tasya Putri S.",
    desc: "Lorem Ipsum"
  },
  {
    imgName: "nandi.jpg",
    title: "M. Destara Syanandi",
    desc: "Lorem Ipsum"
  },
  {
    imgName: "nandi.jpg",
    title: "Puspita S Matovanni",
    desc: "Lorem Ipsum"
  },
  {
    imgName: "putsal.jpg",
    title: "Putri Salsabila",
    desc: "Lorem Ipsum"
  }
]

const OurTeamSection = ({ classes }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>ANGGOTA</h5>
          <h2 className={classes.title}>Tim Kami</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.memberList}>
        {memberList.map(({ imgName, title, desc }, index) => (
          <div key={index} className={classes.oneMember}>
            <div className={classes.valueImage}>
              <Image imgName={imgName} style={{ borderRadius:'50%' }}/>
            </div>
            <div className={classes.valueDesc}>
              <h4>{title}</h4>
              <div>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withStyles(ourTeamStyle)(OurTeamSection);
