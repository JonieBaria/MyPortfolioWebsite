import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is <span>Jonie.</span></h2>
        <div className='prompt'> 
          <p> A Software/Web developer with a passion for learning and creating.</p>
          <a href='https://github.com/JonieBaria'><GithubIcon /></a>
          <EmailIcon />
          <LinkedInIcon />
          
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, NextJS, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, AWS S3, Django
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              Javascript, Python, TypeScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home