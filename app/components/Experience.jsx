import React, { PropTypes } from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
const Experience = (props) => {
  const section = props.section_names.experience;
  const renderEperienceItem = (exp) =>
    <ExperienceItem exp={exp} />;
  return (
    <Section iteminitem section={section}>
      {props.experience.map(renderEperienceItem)}
    </Section>
  );
};

Experience.propTypes = {
  experience: PropTypes.array,
  section_names: PropTypes.object,
};

export default Experience;
