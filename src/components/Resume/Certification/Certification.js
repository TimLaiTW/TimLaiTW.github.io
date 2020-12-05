import React from 'react';
const Certification = ({data}) => (
    <article className="container">
        <h4 className="crtf-name"><a href={data.url}>{data.name}</a></h4>
        <h5 className="crtf-org">Issued by {data.organization}, earned <span className="crtf-date">{data.date}</span></h5>
    </article>    
);

export default Certification;