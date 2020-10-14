import React from 'react';
import Main from '../layouts/Main';
import ReactMarkdown from "react-markdown";

const mk = '#### Still working on it'

const About = () => {
  return (
    <Main>
      <div className="title">
        <h1>ABOUT ME</h1>
        <ReactMarkdown source={mk} />
      </div>
    </Main>
  )
}
export default About;