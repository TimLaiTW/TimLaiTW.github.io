import React from 'react';
import Main from '../layouts/Main';
import Education from '../components/Resume/Education'
import Experience from '../components/Resume/Experience';
import KeySkills from '../components/Resume/KeySkills';

import edu from '../data/resume/education';
import exp from '../data/resume/experience';
import skl from '../data/resume/keyskills';

const sections = [
  'Education',
  'Experience',
  'Skills',
]

const Resume = () => {
  return (
    <Main>
    <article className="post" id="resume">
      <div className="title">
        <h1>RESUME</h1>  
        <div className="link-container">
          {sections.map((sec) => (
            <h5 key={sec}>
              <a href={`#${sec.toLowerCase()}`}>{sec}</a>
            </h5>))}
        </div>
      </div>
      <div className="resume-section">
      <Education data={edu}/>
      <Experience data={exp}/>
      <KeySkills data={skl}/>
      </div>
    </article>
    </Main>
  )
}
export default Resume;