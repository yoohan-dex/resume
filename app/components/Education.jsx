import React, { PropTypes } from 'react';
import Section from './Section';
const Education = props => {
  const { education } = props;
  const section = props.section_names.education;
  const renderHonor = (honor) =>
    <dd className="education-honor">{honor}</dd>;
  const honers = education.honor ? education.honor.map(renderHonor) : null;
  return (
    <Section startTime={education.start} endTime={education.end} section={section}>
      <dl className="education-description">
        <dt className="education-school">{education.school}</dt>
        <dd className="education-major">{education.major}</dd>
        {honers}
      </dl>
    </Section>
  );
};
Education.propTypes = {
  education: PropTypes.object,
  section_names: PropTypes.object,
};
export default Education;
