import React, { PropTypes } from 'react';

const SkillItem = (props) => {
  const item = props.item;
  const renderDescription = (desc) =>
    <dd className="skill-description-item">{desc}</dd>;
  return (
    <dl className="skill-description">
      <dt className="skill-brief">{item.brief}</dt>
      {item.descriptions.map(renderDescription)}
    </dl>
  );
};

SkillItem.propTypes = {
  item: PropTypes.object,
};
export default SkillItem;
