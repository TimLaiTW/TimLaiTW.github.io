import React from 'react';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';
const Home = ({location}) => {
  return (
    <Main>
      <h1 className="home">Welcome!</h1>
      <article className="post" id="home">
      <div className="subtitle">
        <h5>A RESPONSIVE, REACT APP WRITTEN WITH JAVASCRIPT.</h5>
      </div>
        <p>Welcome to my website built with React JS. 
          Please feel free to read more on <Link to='/resume'>my resume</Link>, 
          or check out my <Link to='/projects'>projects</Link>, {" "}
          <Link to='/album'>photo album</Link>, or <Link to='/contact'>contact me</Link></p>
      </article>
    </Main>
  )
}
export default Home;