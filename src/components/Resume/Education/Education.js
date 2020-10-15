import React from 'react';
const Education = ({data}) => (
    <article className="education-container">
        <h4 className="degree">{data.degree}</h4>
        <p className="school"><a href={data.link}>{data.school}</a></p>
        <p className="date">{data.year}</p>
    </article>    
);

export default Education;