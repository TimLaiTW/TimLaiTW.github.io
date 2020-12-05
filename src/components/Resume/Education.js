import React from 'react';
import Edu from './Education/Education';

const Education = ({data}) => (
    <div className="education">
        <h3><div className="resume-icon"><i class="fas fa-university"></i></div>Education</h3>
        {data.map((school) => (
            <Edu 
                data={school}
                key={school.school}
            />
        ))}
    </div>
);

export default Education;