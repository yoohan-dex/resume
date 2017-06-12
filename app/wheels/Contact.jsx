import React from 'react';

const Contact = contact => {
  const { value, type } = contact;
  switch (type) {
    case 'email':
      return (
        <li className="contact-envelope">
          <a href={`mailto://${value}`}>
            {value}
          </a>
        </li>
      );
    case 'wechat':
      return (
        <li className="contact-wechat">
          {value}
        </li>
      );
    case 'github':
      return (
        <li className="contact-github">
          <a href={`http://github.com/${value}`}>
            {`http://github.com/${value}`}
          </a>
        </li>
      );
    case 'blog':
      return (
        <li className="contact-rss">
          <a href={value}>{value}</a>
        </li>
      );
    case 'phone':
      return (
        <li className="contact-phone">
          <a href={`tel: ${parseInt(value, 10)}`}>{value}</a>
        </li>
      );
    case 'weibo':
      return (
        <li className="contact-weibo">
          <a href={`http://weibo.com/${contact.value}`}>{contact.value}</a>
        </li>
      );
    default:
      return null;
  }
};

export default Contact;
