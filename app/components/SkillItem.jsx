import React from 'react';

const SkillItem = (props) => {
  const item = props.item;
  const renderDescription = (desc) =>
    <dd className="skill-description-item">{desc}</dd>;
  return (
    <dl className="skill-description">
      <dt className="skill-brief">{props.item.brief}</dt>
      {props.item.descriptions.map(renderDescription)}
    </dl>
  );
};

export default SkillItem;
