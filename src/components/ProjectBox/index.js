import React from 'react'

import Image from "components/image"

import { ProjectBoxStyles } from "./style"

export default function ProjectBox({ project }) {
  return (
    <ProjectBoxStyles>
      <div>
        <Image imgName={project.imgName} style={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          height: "110px"
        }} />
      </div>
      <div>
        <h5>
          {project.title}
        </h5>
        <p>
          {project.description}
        </p>
        <div className="project-tags">
          {project.tags.map((name, index) => (
            <div key={index}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </ProjectBoxStyles>
  )
}
