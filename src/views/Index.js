import React from 'react';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';
const Home = ({location}) => {
  return (
    <Main>
      <h1 className="home">Welcome!</h1>
      <article className="post" id="home">
      <div className="subtitle">
        <h5>Hi there! welcome to my portfolio.</h5>
      </div>
        <p>This is a responsive, REACT Web app written with JavaScript.<br/>
          Please feel free to read more on <Link to='/resume' className="home-link">my resume</Link>, 
          or check out <Link to='/projects' className="home-link">my projects</Link>, {" "}
          <Link to='/album' className="home-link">photo album</Link>, or <Link to='/contact' className="home-link">contact me</Link></p>
      </article>
    </Main>
  )
}
export default Home;