import React from 'react';
const KeySkills = ({data}) => (
    <article className="keyskills-container">
        <h4 className="skills">{data.title}</h4>
        <p className="skill-info">{data.competency}</p>
    </article>    
);

export default KeySkills;