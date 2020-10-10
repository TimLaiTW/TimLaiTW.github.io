import React from 'react';
import Skl from './KeySkills/KeySkills';

const KeySkills = ({data}) => (
    <div className="keyskills">
        <div className="title" id="keyskills">
            <h3>Skills</h3>
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