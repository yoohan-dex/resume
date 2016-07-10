import React, { PropTypes } from 'react';
import Section from './Section';
const Education = props => {
  const { education } = props;
  const section = props.section_names.education;
  const renderHonor = (honor) =>
    <dd className="education-honor">{honor}</dd>;
  return (
    <Section startTime={education.start} endTime={education.end} section={section}>
      <dl className="education-description">
        <dt className="education-school">{education.school}</dt>
        <dd className="education-major">{education.major}</dd>
        {education.honor.map(renderHonor)}
      </dl>
    </Section>
  );
};
Education.propTypes = {
  education: PropTypes.object,
  section_names: PropTypes.object,
};
export default Education;
