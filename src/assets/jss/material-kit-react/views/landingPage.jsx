import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "black",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "50px",
    minHeight: "32px",
    background: "-webkit-linear-gradient(-45deg, rgb(61,78,129) 0%, rgb(87,83,201) 50%, rgb(110,127,243) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    // textDecoration: "none",
    "@media (max-width: 650px)": {
      fontSize: "2.25em"
    }
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    background: "-webkit-linear-gradient(-45deg, rgb(61,78,129) 0%, rgb(87,83,201) 50%, rgb(110,127,243) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 500px)": {
      margin: "-60px 10px 0px",
    }
  },

};

export default landingPageStyle;
