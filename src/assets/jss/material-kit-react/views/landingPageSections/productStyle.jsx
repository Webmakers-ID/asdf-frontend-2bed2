import { title } from "assets/jss/material-kit-react.jsx";

const productStyle = {
  section: {
    paddingTop: "70px",
    paddingBottom: "50px",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: ".2rem",
    minHeight: "32px",
    color: "#5753C9",
    textDecoration: "none",
    background: "-webkit-linear-gradient(-45deg, rgb(61,78,129) 0%, rgb(87,83,201) 50%, rgb(110,127,243) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
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
