import React from "react";
import { Link } from "gatsby"

import PropTypes from "prop-types";

import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import { List, ListItem, withStyles } from "@material-ui/core";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

import Button from "components/CustomButtons/Button.jsx";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
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
                  href="https://www.facebook.com/CreativeTim"
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
                  href="https://www.instagram.com/CreativeTimOfficial"
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
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
