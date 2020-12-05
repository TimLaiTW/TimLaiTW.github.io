import React from 'react';
import Crtf from './Certification/Certification';
const Certification = ({data}) => (
    <div className="certification">
        <h3><div className="resume-icon"><i class="fas fa-certificate" /></div></h3>
        <div classNam="resume-title"><h3>Certification</h3></div>
        {data.map((crtf) => (
            <Crtf 
                data={crtf} 
                key={crtf.name}/>
        ))}
    </div>
);

export default Certification;