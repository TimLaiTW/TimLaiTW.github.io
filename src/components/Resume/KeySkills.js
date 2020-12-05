import React from 'react';
import Skl from './KeySkills/KeySkills';

const KeySkills = ({data}) => (
    <div className="keyskills">
        <h3><div className="resume-icon"><i class="fas fa-tools"></i></div></h3>
        <h3><div classNam="resume-title">Skills</div></h3>
        {data.map((skill) => (
            <Skl 
                data={skill}
                key={skill.title}
            />
        ))}
    </div>
);

export default KeySkills;