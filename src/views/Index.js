import React from 'react';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';
const Home = ({location}) => {
  return (
    <Main>
      <h1 className="home">Welcome!</h1>
      <article className="post" id="home">
      <div className="subtitle">
        <h5>Ｗelcome to my portfolio.</h5>
      </div>
      <br/>
      <Link to="/">
        <img className="profile-pic" src='/img/profile.png' alt='profile' width="150" height="150"/>
      </Link>
      <div className="bio">
        <h3><a href="mailto:timlai1208@gmail.com">Hi, I'm TAI-LIN LAI</a></h3>
        <p className="bio-content">After leaving my first full-time Software Engineer job at <a href='https://www.compal.com'>Compal Electronics Inc.</a>, 
        I start my new life in Boston as a Computer Science graduate student at <a href='https://www.umb.edu'>UMass Boston</a> since 2017. 
        Having some hands-on experience in website development, contributed in Programming Language: JAVA, JavaScript and Python.
        Being a super outdoor person enjoying in snowboarding, camping, hiking, paddliing and surfing here in Massachusetts, New Hamshire or Vermont.<br/><br/>
        <b>About this website</b>: This is a responsive, REACT Web app written with JavaScript to perform who I am, what I am interested in and what I had done so far.<br/>
        Please feel free to read more on <Link to='/resume' className="home-link">my resume</Link>, 
        or check out <Link to='/projects' className="home-link">my projects</Link>, {" "}
        <Link to='/album' className="home-link">photo album</Link>, or <Link to='/contact' className="home-link">contact me</Link>.</p>
      </div>
      </article>
    </Main>
  )
}
export default Home;