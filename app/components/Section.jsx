import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Section = props => {
  const { item } = props;

  const timeline = props.startTime
    ? <h3 className="timeline-wrapper">
        <time className="timeline-title">
          {`${props.startTime} ~ ${props.endTime}`}
        </time>
      </h3>
    : null;
  const demo = props.demo
    ? <a href={props.demo} className="project-demo invisible-print">DEMO</a>
    : null;
  const source = props.source
    ? <a href={props.source} className="project-source invisible-print">源代码</a>
    : null;

  const projectLink = props.project
    ? <h3 className="project-link-wrapper">
        {demo}
        {source}
      </h3>
    : null;
  return (
    <section
      className={`
        ${item ? 'content-section-item' : 'content-section'} 
      `}
    >
      <div className={!item ? 'sec-title-wrapper' : 'sec-item-title-wrapper'}>
        <h3 className={item ? 'sec-title-item' : 'sec-title'}>
          <span className={classnames({ 'sec-title-ch': !item, 'sec-item-title-ch': item })}>
            {props.section.ch}
          </span>
          <span className={classnames({ 'sec-title-en': !item, 'sec-item-title-en': item })}>
            {props.section.en}
          </span>
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
