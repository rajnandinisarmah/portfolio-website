import React from 'react'
import "./about.scss"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {

  return (
    <section id="about" className='about'>
      <h2 className='about__heading'>About Me</h2>
      <div className='about__container'>
        <div className='about__left'>
          <div className='about__leftp'>
            <p>Hello! My name is Rajnandini and I enjoy building things that live on the web. My interest in web development started back in 2020 when I decided to make a website from my design service which taught me a lot about HTML & CSS!</p>
            <p>Looking back at the journey thus far, I have been fortunate to engage in collaborations ranging from start-ups to multinational corporations, affording me invaluable opportunities to construct a diverse array of intricate products. Presently, my primary emphasis lies in the development of accessible and inclusive products, along with the creation of digital experiences that cater to a wide range of individuals.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className='about__skills'>
            <li className='about__skill'>JavaScript (ES6+)</li>
            <li className='about__skill'>React</li>
            <li className='about__skill'>Next js</li>
            <li className='about__skill'>TypeScript</li>
            <li className='about__skill'>Gastpy</li>
            <li className='about__skill'>Scss</li>
          </ul>
        </div>
        <div className='about__right'>
          <StaticImage layout="constrained" width={200} src={"../../images/logo.svg"} alt="Project" />
        </div>
      </div>
    </section>
  )
}

export default About