import React from 'react';
import Main from '../layouts/Main';
import data from '../data/contact';
const Contact = () => {
  return (
    <Main>
      <h1 className='contacts'>CONTACT</h1>
      <article className="post" id="contact">
        <h3><a href='mailto:timlai1208@gmail.com'>Email me!</a></h3>
        <p>Feel free to get in touch.</p>
        <ul className="icons" >
          {data.map((item) => (
          <li key={item.label}>
              <a href={item.link}>
              <i class={item.icon} />
              </a>
          </li>
          ))}
        </ul>
      </article>
    </Main>
  )
}
export default Contact;