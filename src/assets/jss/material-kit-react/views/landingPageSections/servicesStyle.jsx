import { title } from "assets/jss/material-kit-react.jsx";

const servicesStyle = {
  section: {
    padding: "50px 0",
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
  servicesBlock: {
    display: "flex"
  },
  oneService: {
    width: "20%",
    minHeight: "600px",
    display: "flex"
  },
  serviceBlockLeft: {
    width: "20%",
    textAlign: "center",
    paddingTop: "20px",
    "& > img": {
      width: "5px"
    }
  },
  serviceBlockRight: {
    width: "80%",
    color: "white",
    textAlign: "left"
  }
};

export default servicesStyle;
