

import React from 'react'
import "./noteProjects.scss"
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { noteAbleProjects } from '../../utils/projects';

const SingleNoteProjects = ({ noteAbleProject }) => {
  return (
    <div className='singleNoteProjects'>
      <div className='singleNoteProjects__top'>
        <DriveFileMoveOutlinedIcon />
        <div className='singleNoteProjects__links'>
          {noteAbleProject.demo && <a className='singleNoteProjects__link' aria-label={noteAbleProject.title} target="_blank" rel="noreferrer" href={noteAbleProject.demo}><FileUploadOutlinedIcon /></a>}
          {noteAbleProject.code && <a className='singleNoteProjects__link' aria-label={noteAbleProject.title} target="_blank" rel="noreferrer" href={noteAbleProject.code}><GitHubIcon /></a>}
        </div>
      </div>
      <div className='singleNoteProjects__mid'>
        <h4 className='singleNoteProjects__head'>{noteAbleProject.title}</h4>
        <p className='singleNoteProjects__p'>{noteAbleProject.desc}</p>
      </div>
      <div className='singleNoteProjects__but'>
        {noteAbleProject.techs.map((tech, i) => (
          <span key={i} className='singleNoteProjects__a'>{tech}</span>
        ))}
      </div>
    </div>
  )
}

const NoteProjects = () => {
  return (
    <section className='noteProjects'>
      <h3 className='noteProjects__heading'>Other Noteworthy Projects</h3>
      <div className='noteProjects__grid'>
        {noteAbleProjects.map((noteAbleProject) => (
          <div key={noteAbleProject.id}>
            <SingleNoteProjects noteAbleProject={noteAbleProject} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default NoteProjects