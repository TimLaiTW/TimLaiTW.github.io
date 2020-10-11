import React from 'react';
import Main from '../layouts/Main';
const Home = ({location}) => {
  return (
    <Main>
      <article className="post" id="home">
        <h1>About This Site</h1>
        <h2>Static HTML Page</h2>
      </article>
    </Main>
  )
}
export default Home;