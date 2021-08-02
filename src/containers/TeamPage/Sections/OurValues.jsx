import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Image from "components/image"

import ourValuesStyle from "assets/jss/material-kit-react/views/teamPageSections/ourValuesStyle.jsx";

const valuesList = [
  {
    imgName: "our_value_1.png",
    title: "Fokus pada Masalah",
    desc: "Kami percaya bahwa solusi digital harus memiliki nilai guna kepada penggunanya. Sehingga penting untuk selalu fokus kepada masalah yang ingin diselesaikan."
  },
  {
    imgName: "our_value_2.png",
    title: "Terus Belajar",
    desc: "Kami percaya bahwa belajar tidak berhenti di bangku sekolah dan perkuliahan. Kami menanamkan budaya pembelajaran seumur hidup di ASDF Technology."
  },
  {
    imgName: "our_value_3.png",
    title: "Solusi Inovatif",
    desc: "Dengan berbagai pengalaman menyelesaikan masalah bisnis di Indonesia, kami memahami solusi-solusi inovatif terbaru di bidang Teknologi Informasi."
  }
]

const OurValuesSection = ({ classes }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>NILAI</h5>
          <h2 className={classes.title}>Prinsip ASDF</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.valuesList}>
        {valuesList.map(({ imgName, title, desc }, index) => (
          <div key={index} className={classes.oneValue}>
            <div className={classes.valueImage}>
              <Image imgName={imgName} />
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

export default withStyles(ourValuesStyle)(OurValuesSection);
