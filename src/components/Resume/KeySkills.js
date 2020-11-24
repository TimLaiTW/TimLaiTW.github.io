import React from 'react';
import Skl from './KeySkills/KeySkills';

const KeySkills = ({data}) => (
    <div className="keyskills">
        <div className="section" id="skills">
            <h3><div className="resume-icon"><i class="fas fa-tools"></i></div>Skills</h3>
        </div>
        {data.map((skill) => (
            <Skl 
                data={skill}
                key={skill.title}
            />
        ))}
    </div>
);

export default KeySkills;