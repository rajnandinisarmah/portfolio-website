
import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import "./navbar.scss"
import logo from "../../../static/logo.svg"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Resume from "../../images/resume.pdf"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const variants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delay: 0.5,
            }
        },
        hidden: {
            transition: {
                staggerChildren: 0.1,
                delay: 0.5,
            }
        }
    };
    const navbarAnimation = {
        hidden: {
            y: -30,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="navbar__left">
                <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} src={logo} alt="logo" height="30" />
            </div>
            <div className="navbar__right">
                <motion.ul variants={variants} animate="visible" initial="hidden" className="navbar__links">
                    <motion.li variants={navbarAnimation} className="navbar__link"><Link to="#about">01.<span>About</span></Link></motion.li>
                    <motion.li variants={navbarAnimation} className="navbar__link"><Link to="#experience">02.<span>Experience</span></Link></motion.li>
                    <motion.li variants={navbarAnimation} className="navbar__link"><Link to="#projects">03.<span>Work</span></Link></motion.li>
                    <motion.li variants={navbarAnimation} className="navbar__link"><Link to="#contact">04.<span>Contact</span></Link></motion.li>
                    <motion.li variants={navbarAnimation} className="navbar__link"><a variants={navbarAnimation} className="resume__button" aria-label="menu" target="_blank" rel="noreferrer" href={"/resume.pdf"}>Resume</a></motion.li>
                    <motion.li variants={navbarAnimation} className="navbar__link menu__btn" onClick={() => setOpen(!open)}><MenuRoundedIcon /></motion.li>
                </motion.ul>
            </div>
            <div className={open ? "navbar__menu open" : "navbar__menu"}>
                <ul className='menu__links'>
                    <li className='menu__link'><Link to="#about">01.<span>About</span></Link></li>
                    <li className='menu__link'><Link to="#experience">02.<span>Experience</span></Link></li>
                    <li className='menu__link'><Link to="#projects">03.<span>Work</span></Link></li>
                    <li className='menu__link'><Link to="#contact">04.<span>Contact</span></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar