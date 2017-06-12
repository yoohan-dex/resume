import React from 'react';
import Education from './Education';
import Language from './Language';
import Experience from './Experience';
import Project from './Project';
import Skills from './Skills';

const Content = props => (
  <article className="content row">
    <article className="col-6 first col">
      <Education {...props} />
      {props.language && <Language {...props} />}
      <Experience {...props} />
    </article>
    <article className="col-6 last col">
      <Project {...props} />
      <Skills {...props} />
    </article>
  </article>
);

export default Content;
