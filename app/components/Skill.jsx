import React, { PropTypes } from 'react';
import Section from './Section';
import SkillItem from './SkillItem';
const Skill = (props) => {
  const skill = props.skill;
  const renderItem = (item) =>
    <SkillItem item={item} />;
  return (
    <Section item section={skill}>
      {skill.items.map(renderItem)}
    </Section>
  );
};

Skill.propTypes = {
  skill: PropTypes.object,
};

export default Skill;
