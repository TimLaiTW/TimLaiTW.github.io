import React from 'react';
const SideProjects = ({data}) => (
    <article className="prj-container">
        <div className="prj-title" id="prj-title">
            <a href={data.link}><div className="prj-icon"><i class={data.icon}/></div></a>
        </div>
        <div className="prj-word">
            <a href={data.link}>{data.title}</a>
            <div className="date"> {data.date}</div>
            <div className="description">
                <p>{data.desc}</p>
            </div>
        </div>
    </article>
);

export default SideProjects;