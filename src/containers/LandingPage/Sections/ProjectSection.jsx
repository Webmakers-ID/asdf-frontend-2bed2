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
    imgName: "taman-siswa.jpg",
    title: "Taman Siswa",
    description: "Sebuah kelas A Levels, IB, dan SAT dengan harga paling terjangkau bersama tutor pelajar dari kampus ternama di dunia.",
    tags: [
      "Web Development",
    ]
  },
  {
    imgName: "nusakarya.jpg",
    title: "Nusakarya",
    description: "Online marketplace khusus produk unik dan khas dari Indonesia. Dapat berupa produk kerajinan hingga makanan khas daerah dari Sabang sampai Merauke.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "businessweek.jpg",
    title: "Business Week FIA UI",
    description: "Sebuah acara yang diselenggarakan oleh Administrasi Niaga Fakultas Ilmu Administrasi Universitas Indonesia.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "innovation-battlefield.jpg",
    title: "Innovation Battlefield UI",
    description: "Kompetisi desain UX dengan rangkaian acara yang terdiri dari Masterclass, Battlefield, dan Exhibition.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "alamsarideltamas.jpg",
    title: "Restoran Alam Sari Deltamas",
    description: "Website untuk sebuah restoran Sunda modern yang menonjolkan suasana pedesaan yang berada di tengah kota.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "idea.jpg",
    title: "PT Isyana Delta Anugrah",
    description: "Website untuk sebuah perusahaan general trading dalam printing, stationary, cleaning service, dan produk kimia.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "jmc.jpg",
    title: "PT JM Constrindo Perkasa Engineering",
    description: "Website untuk perusahaan Pelaksanaan konstruksi.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "edp-fia.jpg",
    title: "Executive Development Program FIA UI",
    description: "EDP adalah lembaga di bawah naungan FIA UI yang menyediakan program-program pengembangan eksekutif di hampir semua bidang fungsional manajemen.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "luj.jpg",
    title: "PT Lentera Utama Jaya",
    description: "Website sebuah badan usaha jasa pengamanan dan perdagangan umum untuk general constructor, supplier, cleaning service mechanical, dll.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  {
    imgName: "riniscake.jpg",
    title: "Rini's Cake",
    description: "Sebuah bisnis rumahan yang ada sejak 2016 yang menjual berbagai jenis kue dan puding.",
    tags: [
      "Web Development", "UI/UX Design"
    ]
  },
  // {
  //   imgName: "photo_innovation_battlefield_v2.png",
  //   title: "Innovation Battlefield Universitas Indonesia",
  //   description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //   tags: [
  //     "Web Development", "UI/UX Design", "Digital Marketing"
  //   ]
  // },
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
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
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
