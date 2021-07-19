import { title } from "assets/jss/material-kit-react.jsx";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: ".2rem",
    minHeight: "32px",
    color: "#5753C9",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  videoplayer: {
    width: "100%",
    maxWidth: "800px",
    margin: "auto",
    "& iframe": {
      width:"100%",
      height: "500px"
    },
    "@media (max-width: 800px)": {
      "& iframe": {
        height: "350px"
      }
    }
  }
};

export default productStyle;
