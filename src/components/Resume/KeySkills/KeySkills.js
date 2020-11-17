import React from 'react';
import ProgressBar from "./ProgressBar";

const KeySkills = ({data}) => (
    <article className="container">
        <h4 className="skills">{data.title}</h4>
        <div className="App">
        <ProgressBar key={data.title} bgcolor={data.color} completed={data.competency} title={data.title}/>
    </div>
    </article>    
);

export default KeySkills;