import React from 'react';
import Main from '../layouts/Main';
const Home = ({location}) => {
  return (
    <Main>
      <article className="post" id="home">
        <div className="title">
          <h1>About This Site</h1>
        </div>
      </article>
    </Main>
  )
}
export default Home;