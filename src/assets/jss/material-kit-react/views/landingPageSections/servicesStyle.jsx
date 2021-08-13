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
    textDecoration: "none",
    background: "-webkit-linear-gradient(-45deg, rgb(61,78,129) 0%, rgb(87,83,201) 50%, rgb(110,127,243) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  description: {
    color: "#999"
  },
  servicesBlock: {
    display: "flex"
  },
  oneService: {
    padding: "25px 0",
    width: "20%",
    minHeight: "600px",
    display: "flex",
    "@media (max-width: 1050px)": {
      padding: "20px 0",
      minHeight: "500px"
    },
    "@media (max-width: 700px)": {
      padding: "12px 0",
      minHeight: "400px"
    },
    "@media (max-width: 500px)": {
      padding: "4px 0",
      minHeight: "260px"
    }
  },
  serviceBlockLeft: {
    width: "20%",
    textAlign: "center",
    paddingTop: "20px",
    "& > img": {
      width: "5px"
    },
    "@media (max-width: 1050px)": {
      width: "calc(10% + 5px)",
      "& > img": {
        width: "4px"
      }
    },
    "@media (max-width: 700px)": {
      width: "calc(8% + 4px)",
      "& > img": {
        width: "3px"
      }
    },
    "@media (max-width: 500px)": {
      width: "calc(6.5% + 3px)",
      "& > img": {
        width: "2px"
      }
    }
  },
  serviceBlockRight: {
    width: "80%",
    color: "white",
    textAlign: "left",
    "@media (max-width: 1050px)": {
      width: "calc(90% - 5px)",
      "& h3": {
        fontSize: "1.1em"
      }
    },
    "@media (max-width: 700px)": {
      width: "calc(92% - 4px)",
      "& h3": {
        fontSize: "0.9em"
      }
    },
    "@media (max-width: 580px)": {
      width: "calc(93.5% - 3px)",
      "& h3": {
        fontSize: "0.58em"
      }
    },
    "@media (max-width: 365px)": {
      "& h3": {
        fontSize: "0.5em"
      }
    }
  }
};

export default servicesStyle;
