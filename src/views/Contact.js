import React from 'react';
import Main from '../layouts/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../data/contact';
const Contact = () => {
  return (
    <Main>
      <article className="post" id="contact">
        <div className="title">
          <h2>CONTACT</h2>
          <h5><a href='mailto:timlai1208@gmail.com'>Email me!</a></h5>
        </div>
        <p>Feel free to get in touch.</p>
        <ul className="icons" >
          {data.map((item) => (
          <li key={item.label}>
              <a href={item.link}>
              <FontAwesomeIcon icon={item.icon} size="lg"/>
              </a>
          </li>
          ))}
        </ul>
      </article>
    </Main>
  )
}
export default Contact;