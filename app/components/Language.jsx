import React, { PropTypes } from 'react';
import Section from './Section';
import Progress from '../wheels/Progress';
const Language = props => {
  const section = props.section_names.language;
  const renderCertification = certification =>
    <Progress cert={certification} />;
  const renderDescription = description =>
    <dd className="language-desc-item">{description}</dd>;
  return (
    <Section section={section}>
      {props.language.certifications.map(renderCertification)}
      <dl className="language-description">
        {props.language.descriptions.map(renderDescription)}
      </dl>
    </Section>
  );
};

Language.propTypes = {
  section_names: PropTypes.object,
  language: PropTypes.object,
};
export default Language;
