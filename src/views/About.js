import React from 'react';
import Main from '../layouts/Main';
import ReactMarkdown from "react-markdown";

const mk = '#### Still working on it'

const About = () => {
  return (
    <Main>
      <article className="post" id="about">
        <div className="title">
          <h2>ABOUT ME</h2>
        </div>
      <ReactMarkdown source={mk} />
      </article>
    </Main>
  )
}
export default About;