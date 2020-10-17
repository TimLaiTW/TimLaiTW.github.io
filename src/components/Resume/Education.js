import React from 'react';
import Edu from './Education/Education';

const Education = ({data}) => (
    <div className="education">
        <div className="subtitle" id="education">
            <br/><br/>
            <h3>Education</h3>
        </div>
        {data.map((school) => (
            <Edu 
                data={school}
                key={school.school}
            />
        ))}
    </div>
);

export default Education;