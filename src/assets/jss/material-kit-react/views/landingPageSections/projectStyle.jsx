import { title } from "assets/jss/material-kit-react.jsx";

const projectStyle = {
  section: {
    padding: "40px 0",
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
  multipleRowProjects: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      width: "22%"
    }
  }
};

export default projectStyle;
