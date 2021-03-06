import React from 'react';
import Main from '../layouts/Main';
import Photo from '../components/Album/Photo';

import FujiColor from '../data/photo/FujiColor';
import FujiSimpleAce from '../data/photo/FujiSimpleAce';
import KodakGold from '../data/photo/KodakGold';

const sections = [
  'Fuji Simple Ace',
  'Fuji Color',
  'Kodak Gold'
]

const Gallery = () => {
  return (
    <Main>
    <h1 className='gallery'>Photo Album</h1>  
    <article className="post" id="gallery">
      <div className="link-container">
        {sections.map((sec) => (
          <h5 key={sec}>
            <a href={`#${sec}`}>{sec}</a>
          </h5>))}
      </div>
      <h5 className="section" id="Fuji Simple Ace">Fuji Simple Ace 200</h5> 
        {FujiSimpleAce.map((pic) => (
          <Photo data={pic} />
        ))}
        
      <h5 className="section" id="Fuji Color">Fuji Color 200</h5> 
        {FujiColor.map((pic) => (
          <Photo data={pic} />
        ))}
      
      <h5 className="section" id="Kodak Gold">Kodak Gold 200</h5> 
        {KodakGold.map((pic) => (
          <Photo data={pic} />
        ))}
    </article>
    </Main>
  )
}
export default Gallery;