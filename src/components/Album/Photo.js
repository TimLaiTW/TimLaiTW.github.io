import React from 'react';
const Photo = ({data}) => (
    <div>
            <img className="photo" key={data.id} src={data.src} alt={data.title} width="600" height="400"/>
    </div>
);

export default Photo;
