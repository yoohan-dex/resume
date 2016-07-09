import React, { PropTypes } from 'react';
const Section = props => {
  const timeline = props.startTime ? (
    <h3 className="timeline-wrapper">
      <time className="timeline-title">
        {`${props.startTime} ~ ${props.endTime}`}
      </time>
    </h3>
  ) : null;
  const demo = props.demo ? (
    <a href={props.demo} className="project-demo invisible-print">DEMO</a>
  ) : null;
  const source = props.source ? (
    <a href={props.source} className="project-source invisible-print">源代码</a>
  ) : null;

  const projectLink = props.project ? (
    <h3 className="project-link-wrapper">
      {demo}
      {source}
    </h3>
  ) : null;
  return (
    <section
      className={`
        ${props.item ? 'content-section-item' : 'content-section'} 
      `}
    >
      <div className="sec-title-wrapper">
        <h3 className={props.item ? 'sec-title-item' : 'sec-title'}>
          <span className={`sec${props.item ? '-item' : ''}-title-ch`}>{props.section.ch}</span>
          <span className={`sec${props.item ? '-item' : ''}-title-en`}>{props.section.en}</span>
        </h3>
        {projectLink}
        {timeline}
      </div>
      <div className={props.iteminitem ? 'sec-item-in-item' : 'sec-content'}>
        {props.children}
      </div>
    </section>
  );
};

Section.propTypes = {
  section: PropTypes.object,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  demo: PropTypes.string,
  source: PropTypes.string,
  item: PropTypes.bool,
  project: PropTypes.bool,
  iteminitem: PropTypes.bool,
  children: PropTypes.node,
};

export default Section;
