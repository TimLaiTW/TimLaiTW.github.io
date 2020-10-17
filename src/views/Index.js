import React from 'react';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';
const Home = ({location}) => {
  return (
    <Main>
      <article className="post" id="home">
        <div className="title">
          <h1>ABOUT THIS SITE</h1>
        </div>
          <p>Welcome to my website built with React JS. 
            Please feel free to read <Link to='/about'>about me</Link>, or check out <Link to='/resume'>my resume</Link>, <Link to='/projects'>projects</Link>, or <Link to='/contact'>contact me</Link></p>
      </article>
    </Main>
  )
}
export default Home;