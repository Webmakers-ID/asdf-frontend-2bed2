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
    textDecoration: "none",
    background: "-webkit-linear-gradient(-45deg, rgb(61,78,129) 0%, rgb(87,83,201) 50%, rgb(110,127,243) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
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
    },
    "@media (max-width: 500px)": {
      "& > *": {
        width: "63%"
      },
    }
  }
};

export default projectStyle;
