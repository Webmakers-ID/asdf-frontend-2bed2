import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import ProjectBox from "components/ProjectBox"

import projectStyle from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.jsx";

import { projectList } from "../../LandingPage/Sections/ProjectSection.jsx"

function AllProjectSection({ classes }) {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>PROYEK</h5>
          <h2 className={classes.title}>Proyek Kami</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.multipleRowProjects}>
        {projectList.map((project, index) => (
          <ProjectBox project={project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default withStyles(projectStyle)(AllProjectSection);
