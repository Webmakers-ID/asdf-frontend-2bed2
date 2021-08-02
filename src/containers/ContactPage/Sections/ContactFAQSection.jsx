import React from "react";
import Faq from "react-faq-component";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import contactFormStyle from "assets/jss/material-kit-react/views/contactPageSections/contactFormStyle.jsx";

const data = {
  rows: [
    {
      title: "Berapa biaya pembuatan aplikasi?",
      content: `Biayanya fleksibel tergantung kebutuhan dari klien. Tim kami menyediakan konsultasi gratis beserta estimasi biaya. Kontak kami lewat form di atas atau lewat Whatsapp di 0856 9297 0400.`,
    },
    {
      title: "Berapa lama aplikasi dibuat?",
      content: "Fleksibel dari spesifikasi dan tingkat kesulitannya. Bisa satu minggu sampai beberapa bulan.",
    },
    {
      title: "Bagaimana sistem pembayarannya?",
      content: `DP 50% di awal dan pelunasan di akhir untuk pembuatan aplikasi. Di beberapa layanan lain dan juga pembuatan aplikasi skala besar, sistem pembayaran bisa disepakati bersama.`,
    },
    {
      title: "Bagaimana jika ada yang perlu direvisi?",
      content: `Setelah aplikasi dibuat, kami menyediakan revisi tidak terbatas kepada klien dalam jangka waktu tertentu. Jika ada yang dirasa kurang, Anda bisa merequest revisi ke kami.`,
    }
  ],
};

const styles = {
  // bgColor: 'white',
  // rowContentColor: 'grey',
  // arrowColor: "red"
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const ContactFAQSection = ({ classes }) => {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>FAQ</h5>
          <h2 className={classes.title}>Frequently Asked Questions</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.faqSection}>
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
      </div>
    </div>
  );
}

export default withStyles(contactFormStyle)(ContactFAQSection);
