import { container, primaryColor } from "assets/jss/material-kit-react.jsx";

const footerStyle = {
  block: {
    color: "inherit",
    // padding: "0.9375rem",
    padding: "0.2375rem 0.6375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    "&:first-child": {
      paddingLeft: "0"
    },
    "&:last-child": {
      paddingRight:"0"
    }
  },
  flex: {
    display: "flex",
    flexDirecton: "row",
    "@media (max-width: 500px)": {
      flexDirection: "column",
      margin: "0 1.35rem"
    }
  },
  flexCol: {
    flexBasis: "24%",
    margin: "0 1%"
  },
  logo: {
    "@media (max-width: 500px)": {
      paddingLeft: "0",
      paddingRight: "0"
    }
  },
  subHeader: {
    margin: "0.98rem 0",
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: "29px",
    letterSpacing: "0.1em",
    textAlign: "left",
  },
  contactInfo: {
    fontWeight: "700",
    lineHeight: "29px",
  },
  socialMedia: {
    display: "flex",
    marginTop: "4rem",
    "@media (max-width: 500px)": {
      marginTop: "0"
    }
  },
  left: {
    display: "block",
    "@media (min-width: 992px)": {
      float: "left"
    }
  },
  right: {
    padding: "15px 0",
    margin: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  footer: {
    marginTop: "1.35rem",
    padding: "0.9375rem 0",
    background: "linear-gradient(135deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)",
    width: "100%",
    color: "#FFFFFF",
    // textAlign: "center",
    textAlign: "left",
    display: "flex",
    zIndex: "2",
    position: "relative",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  listItem: {
    padding: "0",
    margin: "0.6rem 0",
    "& a, & a:hover": {
      color: "white",
    },
    "& a:hover": {
      
    }
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
