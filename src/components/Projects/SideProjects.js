import React from 'react';
const SideProjects = ({data}) => (
    <article className="project-container">
        <div className="subtitle" id="project-title">
            <h3 ><a href={data.link}>{data.title}</a></h3>
        </div>
        <p className="date"> {data.date}</p>
        <img src={data.image} alt={data.title}/>
        <div className="description">
            <p>{data.desc}</p>
        </div>
    </article>
);

export default SideProjects;