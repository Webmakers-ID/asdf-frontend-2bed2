import { title } from "assets/jss/material-kit-react.jsx";

const perkStyle = {
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
  perkItem: {
    display: "flex",
    flexDirection: "column",
    flex: '1 0 31%',
    margin: "15px 5px",
    alignItems: 'center',
    fontWeight: "bold",
  },
  perkItemBox: {
    width: '90px',
    height: '90px',
    marginBottom: "10px",
    background: 'linear-gradient(135deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)',
    borderRadius: '15px',
  }
};

export default perkStyle;
