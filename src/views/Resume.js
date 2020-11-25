import React from 'react';
import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Certification from '../components/Resume/Certification';
import KeySkills from '../components/Resume/KeySkills';

import edu from '../data/resume/education';
import exp from '../data/resume/experience';
import crt from '../data/resume/certification';
import skl from '../data/resume/keyskills';

const sections = [
  'Education',
  'Experience',
  'Certification',
  'Skills',
]

const Resume = () => {
  return (
    <Main>
    <h1 className="resume">About Me!</h1>
    <article className="post" id="resume">
      <div className="subtitle">
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
      <Certification data={crt}/>
      <KeySkills data={skl}/>
      </div>
    </article>
    </Main>
  )
}
export default Resume;