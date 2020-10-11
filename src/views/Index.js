import React from 'react';
import Header from '../components/Template/Header';
const Home = ({location}) => {
  return (
    <div>
      <Header />
      <article className="post" id="home">
        <h1>About This Site</h1>
        <h2>Static HTML Page</h2>
      </article>
    </div>
  )
}
export default Home;