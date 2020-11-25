import React from 'react';
import Crtf from './Certification/Certification';
const Certification = ({data}) => (
    <div className="certification">
        <div className="section" id="certification">
            <h3><div className="resume-icon"><i class="fas fa-certificate" /></div>Certification</h3>
        </div>
        {data.map((crtf) => (
            <ul>
                <li className="description-item">
                    <Crtf data={crtf} key={crtf.name}/>
                </li>
            </ul>
        ))}
    </div>
);

export default Certification;