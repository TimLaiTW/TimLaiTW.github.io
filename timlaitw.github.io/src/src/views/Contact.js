import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../data/contact';
const Contact = () => {
  return (
    <>
      <div>
        <h2>Contact</h2>
      </div>
      <div className="email-at">
          <p>Feel free to get in touch. You can email me at {" "}
            <a href='mailto:timlai1208@gmail.com'>here</a>！
          </p>
        </div>
      <ul className="icons">
      {data.map((item) => (
        <li key={item.label}>
          <a href={item.link}>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      ))}
      </ul>
    </>
  )
}
export default Contact;