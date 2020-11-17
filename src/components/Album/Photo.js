import React from 'react';
const Photo = ({data}) => (
    <div>
        <img className="photo" key={data.id} src={data.src} alt={data.title} width="60%" height="40%"/>
    </div>
);

export default Photo;
