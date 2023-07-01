
import React from 'react'
import "./projects.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { featuredProjects } from '../../utils/projects';
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
    return (
        <section id="projects" className='projects'>
            <h3 className='projects__heading'>Some Things I’ve Built</h3>
            <div className='projects__wrapper'>
                <div className='singleProject'>
                    <div className='singleProject__left'>
                        <StaticImage layout="constrained" placeholder="blurred" height={600} src="../../images/rtube.png" alt="Project" />
                    </div>
                    <div className='singleProject__right'>
                        <p className='singleProject__featured'>Featured Project</p>
                        <h4 className='singleProject__heading'>{featuredProjects[0].title}</h4>
                        <div className='singleProject__pWrapper'>
                            <p className='singleProject__p'>{featuredProjects[0].desc}</p>
                        </div>
                        <div className='skills__wrapper'>
                            {featuredProjects[0].techs.map((tech, i) => (
                                <p className='skill' key={i}>{tech}</p>
                            ))}
                        </div>
                        <div className='skills__links'>
                            <a target="_blank" rel="noreferrer" aria-label='project' href={featuredProjects[0].code}><GitHubIcon /></a>
                            <a target="_blank" rel="noreferrer" aria-label='project' href={featuredProjects[0].demo}><LinkIcon /></a>
                        </div>
                    </div>
                </div>
                <div className='singleProject'>
                    <div className='singleProject__left'>
                        <StaticImage layout="constrained" placeholder="blurred" height={600} src="../../images/doc.png" alt="Project" />
                    </div>
                    <div className='singleProject__right'>
                        <p className='singleProject__featured'>Featured Project</p>
                        <h4 className='singleProject__heading'>{featuredProjects[1].title}</h4>
                        <div className='singleProject__pWrapper'>
                            <p className='singleProject__p'>{featuredProjects[1].desc}</p>
                        </div>
                        <div className='skills__wrapper'>
                            {featuredProjects[1].techs.map((tech, i) => (
                                <p className='skill' key={i}>{tech}</p>
                            ))}
                        </div>
                        <div className='skills__links'>
                            <a target="_blank" rel="noreferrer" aria-label='project' href={featuredProjects[1].code}><GitHubIcon /></a>
                            <a target="_blank" rel="noreferrer" aria-label='project' href={featuredProjects[1].demo}><LinkIcon /></a>
                        </div>
                    </div>
                </div>
                <div className='singleProject'>
                    <div className='singleProject__left'>
                        <StaticImage layout="constrained" placeholder="blurred" height={600} src="../../images/vexflix.png" alt="Project" />
                    </div>
                    <div className='singleProject__right'>
                        <p className='singleProject__featured'>Featured Project</p>
                        <h4 className='singleProject__heading'>{featuredProjects[2].title}</h4>
                        <div className='singleProject__pWrapper'>
                            <p className='singleProject__p'>{featuredProjects[2].desc}</p>
                        </div>
                        <div className='skills__wrapper'>
                            {featuredProjects[2].techs.map((tech, i) => (
                                <p className='skill' key={i}>{tech}</p>
                            ))}
                        </div>
                        <div className='skills__links'>
                            <a target="_blank" rel="noreferrer" aria-label='project' href={featuredProjects[2].code}><GitHubIcon /></a>
                            <a target="_blank" rel="noreferrer" aria-label='project' href={featuredProjects[2].demo}><LinkIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects