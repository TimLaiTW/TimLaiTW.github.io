import React from 'react';
const Experience = ({data}) => (
    <article className="container">
        <h4 className="company">{data.position} | <a href={data.link}>{data.company}, {data.location}</a></h4>
        <p className="date">{data.daterange}</p>
        <div className="description">
            {data.points.map((des) => 
                <ul>
                    <li className="description-item">{des}</li>
                </ul>)}
        </div>
    </article>    
);

export default Experience;