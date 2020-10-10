import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../data/contact';
const Contact = () => {
  return (
    <>
      <article className="post" id="contact">
        <div>
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
    </>
  )
}
export default Contact;