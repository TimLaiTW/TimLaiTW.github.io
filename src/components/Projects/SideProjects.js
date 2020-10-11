import React from 'react';
const SideProjects = ({data}) => (
    <article className="project-container">
        <div className="title" id="stocktracker">
            <h3 ><a href={data.link}>{data.title}</a></h3>
        </div>
        <img src={data.imgae} alt={data.title} />
        <div className="description">
            <p>{data.desc}</p>
        </div>
    </article>
);

export default SideProjects;