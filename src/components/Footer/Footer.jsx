import React from "react";
import { Link } from "gatsby"

import PropTypes from "prop-types";

import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import { List, ListItem, withStyles } from "@material-ui/core";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

import Button from "components/CustomButtons/Button.jsx";
import Image from "components/image"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont, brand } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.flex}>
          <div className={classes.flexCol}>
            <Button color="transparent" to="/" className={classes.logo}>
              <div style={{ width: "100px" }}>
                <Image className="logo-white" imgName={brand} />
              </div>
            </Button>
          </div>
          <div className={classes.flexCol}>
            <div className={classes.subHeader}>
              Kontak
            </div>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <div style={{ width: "20px", marginRight: "0.75rem" }}>
                  <Image className="logo-white" imgName="Footer - Phone Icon.png" />
                </div>
                +62 856 9297 0400
              </ListItem>
              <ListItem className={classes.listItem}>
                <div style={{ width: "20px", marginRight: "0.75rem" }}>
                  <Image className="logo-white" imgName="Footer - Email Icon.png" />
                </div>
                <a href="mailto:support@webmakers.id"><u>support@webmakers.id</u></a>
              </ListItem>
            </List>
            <div className={classes.socialMedia}>
              <Tooltip
                id="instagram-twitter"
                title="Follow us on linkedin"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://www.linkedin.com/company/webmakers-id"
                  target="_blank"
                  color="transparent"
                  className={classes.block}
                >
                  <div style={{ width: "20px" }}>
                    <Image imgName="Footer - Linkedin Icon.png" />
                  </div>
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-facebook"
                title="Follow us on facebook"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.facebook.com/webmakers.id"
                  target="_blank"
                  className={classes.block}
                >
                  <div style={{ width: "20px" }}>
                    <Image imgName="Footer - Facebook Icon.png" />
                  </div>
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-tooltip"
                title="Follow us on instagram"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.instagram.com/asdftech.id"
                  target="_blank"
                  className={classes.block}
                >
                  <div style={{ width: "20px" }}>
                    <Image imgName="Footer - Instagram Icon.png" />
                  </div>
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className={classes.flexCol}>
            <div className={classes.subHeader}>
              Menu
            </div>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Link
                  to="/"
                >
                  Beranda
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link
                  to="/projects"
                >
                  Proyek
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link
                  to="/services"
                >
                  Layanan
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link
                  to="/team"
                >
                  Tim ASDF
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link
                  to="#"
                >
                  Blog
                </Link>
              </ListItem>
            </List>
          </div>
          <div className={classes.flexCol}>
            <div className={classes.subHeader}>
              Layanan
            </div>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                Web Development
              </ListItem>
              <ListItem className={classes.listItem}>
                UI/UX Design
              </ListItem>
              <ListItem className={classes.listItem}>
                Digital Marketing
              </ListItem>
              <ListItem className={classes.listItem}>
                Mobile App Development
              </ListItem>
              <ListItem className={classes.listItem}>
                Machine Learning Development
              </ListItem>
            </List>
          </div>
        </div>
        {/* <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/team"
                className={classes.block}
              >
                About us
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/terms-and-conditions"
                className={classes.block}
              >
                Terms &amp; Conditions
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/privacy-policy"
                className={classes.block}
              >
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-twitter"
                title="Follow us on linkedin"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://www.linkedin.com/company/webmakers-id"
                  target="_blank"
                  color="transparent"
                  className={classes.block}
                >
                  <FaLinkedin/>
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-facebook"
                title="Follow us on facebook"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.facebook.com/webmakers.id"
                  target="_blank"
                  className={classes.block}
                >
                  <FaFacebook/>
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow us on instagram"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.instagram.com/asdftech.id"
                  target="_blank"
                  className={classes.block}
                >
                  <FaInstagram/>
                </Button>
              </Tooltip>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}
          {" "}
          PT As Digital First
        </div> */}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
  brand: PropTypes.string,
};

export default withStyles(footerStyle)(Footer);
