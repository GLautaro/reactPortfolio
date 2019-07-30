import React from 'react';
import styled from 'styled-components';
import H2Element from '../styled/H2Element';

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
`;

const SkillsH5 = styled.h5`
  margin: .5em 0;
`;

const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #F8BBD0;
`;


const Skills = props => (
    <div className="Skills">
        <H2Element name="Skills"/>
        <SkillsContainer>
            {props.data.map( ( skill, index ) => (
            <div className="Skills-item" key={`Skills-${index}`}>
                <SkillsH5>{skill.name}</SkillsH5>
                <SkillsLine>
                    <span>{skill.percentage}</span>
                </SkillsLine>
            </div>
            ))}
        </SkillsContainer>
    </div>
);

export default Skills;