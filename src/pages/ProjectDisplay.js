import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from "@material-ui/icons/GitHub"

import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id]

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt='prjimage'/>
        <p>
            <b>Skills: </b>{project.skill}
        </p>
        <GithubIcon />

    </div>
  )
}

export default ProjectDisplay