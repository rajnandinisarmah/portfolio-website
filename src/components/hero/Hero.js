
import { motion } from "framer-motion";
import { Link } from 'gatsby'
import React from 'react'
import "./hero.scss"

const Hero = () => {

    const variants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            }
        },
        hidden: {
            transition: {
                staggerChildren: 0.1,
            },
        }
    };
    const heroAnimation = {
        hidden: {
            y: 60,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section className='hero'>
            <motion.div variants={variants} animate="visible" initial="hidden" transition={{ delay: 1 }} className='hero__container'>
                <motion.span variants={heroAnimation} className='hero__starter'>Hi, my name is</motion.span>
                <motion.h1 variants={heroAnimation} className='hero__main'>Rajnandini Sarmah.</motion.h1>
                <motion.p variants={heroAnimation} className='hero__submain'>I build things for the web.</motion.p>
                <motion.p variants={heroAnimation} className='hero__des'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am looking for new opportunities to grow as a professional.</motion.p>
                <motion.span variants={heroAnimation}>
                    <Link to="#contact" className='hero__btn'>Contact Me</Link>
                </motion.span>
            </motion.div>

        </section>
    )
}

export default Hero