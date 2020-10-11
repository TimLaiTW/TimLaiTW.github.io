import React from 'react';
import Main from '../layouts/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../data/contact';
const Contact = () => {
  return (
    <Main>
      <article className="post" id="contact">
        <div className="title">
          <h2>Contact</h2>
        </div>
        <p>Get in touch.</p>
        <ul className="icons" >
          {data.map((item) => (
            <li key={item.label}>
              <a href={item.link}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Main>
  )
}
export default Contact;