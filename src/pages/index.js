import * as React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import { About } from "../components/about"
import { Contact } from "../components/contact"
import { Intro } from "../components/intro"
import img from '../images/PIXELS.svg'
import bookimg from '../images/bookblog.svg'
import ts from '../images/ts.png'
import github from '../images/github.png'
const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <section id="projects" data-test="project-section">
        <ProjectCard
        title={img}
        url="https://mood-board-2023.netlify.app/"
        p="This project is a lightbulb idea, that came to me after using shortcuts on IOS. I made a shortcut that would take my mood from a list and add to a text file. My site then takes that file and automatically parses into JSON. My frontend takes that JSON and renders it. Using a bit of RegEx, I am able to color the correct pixel for each day and month. I am very excited about this project!"
        />
        <ProjectCard
        title={bookimg}
        url="https://bookblogmain.gatsbyjs.io/"
        p="I have wanted to do this for awhile. I started listening to books during the pandemic and wanted to have documentation of my thoughts and feelings about each book. But I didn't want to add my unremarkable ramblings to Goodreads. Thus the book blog was born."
        />
        <ProjectCard
        title={ts}
        url="https://taylorswiftblogmain.gatsbyjs.io/"
        p="Fun Blog that came about after listening to her newest album on repeat. I wanted to record my favorites and give myself an excuse to revisit all her music again."
        classname="ts-img"
        />
        <ProjectCard
        title={github}
        url="https://github.com/LaurenwallerDesigns/quiz"
        p="A quiz made using React & react hooks."
        />
      </section>
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
