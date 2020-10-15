import React from 'react';
import Exp from './Experience/Experience';

const Experience = ({data}) => (
    <div className="experience">
        <div className="subtitle" id="experience" >
        <h3>Experience</h3>
        </div>
        {data.map((job) => (
            <Exp 
                data={job}
                key={job.company}
            />
        ))}
    </div>
);

export default Experience;