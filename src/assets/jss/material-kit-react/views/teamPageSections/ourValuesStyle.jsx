import { title } from "assets/jss/material-kit-react.jsx";

const ourValuesStyle = {
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
  valuesList: {
    display: "flex",
    justifyContent: "center"
  },
  oneValue: {
    width: "33%",
    margin: "4%",
    textAlign: "center"
  },
  valueImage: {
    width: "50%",
    margin: "auto"
  },
  valueDesc: {
    paddingTop: "10px",
    "& > h4": {
      fontWeight: "bold"
    }
  }
};

export default ourValuesStyle;
