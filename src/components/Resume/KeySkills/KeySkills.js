import React from 'react';
import ProgressBar from "./ProgressBar";

const KeySkills = ({data}) => (
    <article className="container">
        <h4 className="skills">{data.title}</h4>
        <ProgressBar key={data.title} bgcolor={data.color} completed={data.competency} title={data.title}/>
    </article>    
);

export default KeySkills;