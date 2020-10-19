import React from 'react';
import Main from '../layouts/Main';
import Tasks from '../components/Projects/SideProjects';
import data from '../data/projects';
const Projects = () => {
  return (
    <Main>
    <article className="post" id="project">
      <div className="title">
        <h1>PROJECTS</h1>
        <h5>Just for fun (test image...)</h5>
      </div>
      {data.map((project) => (
        <Tasks 
          data={project}
          key={project.title} />
      ))}
      
    </article>
    </Main>
  )
}
export default Projects;