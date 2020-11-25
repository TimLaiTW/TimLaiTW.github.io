import React from 'react';
const Certification = ({data}) => (
    <article className="container">
        <h3 className="crtf-name"><a href={data.url}>{data.name}</a></h3>
        <p className="crtf-org">Issued by {data.organization}, earned <span className="crtf-date">{data.date}</span></p>
    </article>    
);

export default Certification;