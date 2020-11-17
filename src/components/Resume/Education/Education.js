import React from 'react';
const Education = ({data}) => (
    <article className="container">
        <h3 className="school"><a href={data.link}>{data.school}</a></h3>
        <h4 className="degree">{data.degree}, earned <span className="date">{data.year}</span></h4>
        <p className="location">{data.location}</p>
    </article>    
);

export default Education;