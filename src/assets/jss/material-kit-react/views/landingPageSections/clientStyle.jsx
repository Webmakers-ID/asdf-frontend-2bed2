import { title } from "assets/jss/material-kit-react.jsx";

const clientStyle = {
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
    color: "#999",
  },
  flex: {
    display: "flex",
    width: "100%",
  },
  flexLeft: {
    flexBasis: "50%",
    width: "50%",
  },
  flexRight: {
    flexBasis: "45%",
    width: "45%",
  },
  slider: {
    "& .slick-track": {
      display: "flex",
      alignItems: "center"
    },
    "& .slick-prev": {
      "&:before": {
        content: "none",
      },
      "@media (max-width: 500px)": {
        left: "-10px"
      }
    },
    "& .slick-next": {
      "&:before": {
        content: "none",
      },
      "@media (max-width: 500px)": {
        right: "-10px"
      }
    }
  },
  clientBox: {
    minHeight: "100px",
    background: "linear-gradient(135deg, rgb(80,167,194), rgb(151,255,209))",
    borderRadius: '8px',
    padding: "25px 20px",
    "& div": {
      height: "100%",
    }
  },
}

export default clientStyle;