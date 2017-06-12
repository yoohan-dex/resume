import React, { PropTypes } from 'react';
import Contact from '../wheels/Contact';

const Header = props => {
  const renderContact = contact => <Contact type={contact.type} value={contact.value} />;
  return (
    <header className="header-row">
      <section className="title">
        <h1>{props.name}</h1>
        <h2>{props.job_description.join('/')}</h2>
      </section>
      <address>
        <div className="address-wrapper">
          <ul className="contact">
            {props.contact.map(renderContact)}
          </ul>
        </div>
      </address>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  job_description: PropTypes.array,
  contact: PropTypes.array,
};

export default Header;
