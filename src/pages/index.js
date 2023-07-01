import React from "react"
import About from "../components/about/About"
import ContactMe from "../components/contactMe/ContactMe"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import NoteProjects from "../components/noteProject/NoteProjects"
import Projects from "../components/projects/Projects"
import SideEmail from "../components/sideEmail/SideEmail"
import Socialmedia from "../components/socialmedia/Socialmedia"
import Work from "../components/work/Work"
import '../styles/globle.scss'
import { Helmet } from "react-helmet";

export default function Home() {
  return <>
    <Helmet htmlAttributes={{
      lang: 'en',
    }}>
      <meta charSet="utf-8" />
      <title>Rajnandini Sarmah</title>
      <link rel="canonical" href="https://anshumantalukdar.netlify.app/" />
      <link rel="icon" href="/logo.svg" />
      <meta name="description" content="I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am looking for new opportunities to grow as a professional."></meta>
      <meta name="keywords" content="Web, Software, Developer, Engineer, Rajnandini, Sarmah"></meta>
      <meta name="author" content="Rajnandini Sarmah"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="google-site-verification" content="fiu6DZELnptUcSdQ75xVUd6ZuswT7Zq5W8TK5wImSv4" />
    </Helmet>
    <Navbar />
    <Hero />
    <Socialmedia />
    <SideEmail />
    <About />
    <Work />
    <Projects />
    <NoteProjects />
    <ContactMe />
    <Footer />
  </>
}
