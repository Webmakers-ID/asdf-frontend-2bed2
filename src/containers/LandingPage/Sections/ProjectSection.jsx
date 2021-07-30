import React from "react"
import Slider from "react-slick"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button"
import ProjectBox from "components/ProjectBox"
import Image from "components/image"

import projectStyle from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.jsx";

export const projectList = [
  {
    imgName: "photo_innovation_battlefield_v2.png",
    title: "Innovation Battlefield Universitas Indonesia",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    tags: [
      "Web Development", "UI/UX Design", "Digital Marketing"
    ]
  },
  {
    imgName: "photo_innovation_battlefield_v2.png",
    title: "Innovation Battlefield Universitas Indonesia",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    tags: [
      "Web Development", "UI/UX Design", "Digital Marketing"
    ]
  },
  {
    imgName: "photo_innovation_battlefield_v2.png",
    title: "Innovation Battlefield Universitas Indonesia",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    tags: [
      "Web Development", "UI/UX Design", "Digital Marketing"
    ]
  },
  {
    imgName: "photo_innovation_battlefield_v2.png",
    title: "Innovation Battlefield Universitas Indonesia",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    tags: [
      "Web Development", "UI/UX Design", "Digital Marketing"
    ]
  },
  {
    imgName: "photo_innovation_battlefield_v2.png",
    title: "Innovation Battlefield Universitas Indonesia",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    tags: [
      "Web Development", "UI/UX Design", "Digital Marketing"
    ]
  },
  {
    imgName: "photo_innovation_battlefield_v2.png",
    title: "Innovation Battlefield Universitas Indonesia",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    tags: [
      "Web Development", "UI/UX Design", "Digital Marketing"
    ]
  }
]

function ProjectSection({ classes }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <div>
        <Image imgName="right-chevron.png" alt="next" />
      </div>
    ),
    prevArrow: (
      <div>
        <Image imgName="left-chevron.png" alt="next" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div id="projects" style={{
            position: "relative",
            bottom: "75px"
          }} />
          <h5 className={classes.description}>PROYEK</h5>
          <h2 className={classes.title}>Proyek Kami</h2>
        </GridItem>
      </GridContainer>
      <div>
        <Slider {...settings}>
          {projectList.map((project, index) => (
            <ProjectBox project={project} key={index} />
          ))}
        </Slider>
      </div>
      <div style={{
        paddingTop: "1.5rem"
      }}>
        <Button color="primary" to="/projects">Lihat Semua</Button>
      </div>
    </div>
  )
}

export default withStyles(projectStyle)(ProjectSection);
