import React from 'react';
import Exp from './Experience/Experience';

const Experience = ({data}) => (
    <div className="experience">
        <div className="section" id="experience" >
            <h3><div className="resume-icon"><i class="fas fa-briefcase" /></div>Experience</h3>
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