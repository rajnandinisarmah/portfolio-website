
import React from 'react'
import "./socialmedia.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from "framer-motion";

const Socialmedia = () => {
    return (
        <motion.ul animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }} className='socialmedia'>
            <li className='socialmedia__links'>
                <a className='socialmedia__link' aria-label='Linkedin' target="_blank" href='https://www.linkedin.com/in/rajnandini-sarmah/'><LinkedInIcon /></a>
            </li>
            <li className='socialmedia__links'>
                <a className='socialmedia__link' aria-label='Github' target="_blank" href='https://github.com/rajnandinisarmah'><GitHubIcon /></a>
            </li>


        </motion.ul>
    )
}

export default Socialmedia