import React from 'react';
import Main from '../layouts/Main';
import ReactMarkdown from "react-markdown";
const mk = '#### Still working on it'

const Album = () => {
  return (
    <Main>
      <article className="post" id="about">
        <div className="title">
          <h2>Photo Album</h2>
          <h5>A place for my film </h5>
        </div>
      <ReactMarkdown source={mk} />
      </article>
    </Main>
  )
}
export default Album;