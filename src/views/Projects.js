import React from 'react';
import Main from '../layouts/Main';
import Tasks from '../components/Projects/SideProjects';
import data from '../data/projects';
const Projects = () => {
  return (
    <Main>
    <h1 className="projects">Projects!</h1>
    <article className="post" id="project">
      <div className="subtitle">
        <h5>...</h5>
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