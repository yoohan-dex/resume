import React, { PropTypes } from 'react';
import Section from './Section';

const ProjectItem = (props) => {
  const project = props.project;
  const renderDescription = (desc) =>
    <dd className="project-description-item">{desc}</dd>;
  return (
    <Section item section={project} source={project.source} demo={project.demo}>
      <dl className="project-description">
        {project.descriptions.map(renderDescription)}
      </dl>
    </Section>
  );
};
ProjectItem.propTypes = {
  project: PropTypes.object,
}
export default ProjectItem;
