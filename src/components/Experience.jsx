import React from 'react';

const Experience = props => (
    <div className="Experience">
        <div className="Experience-container">
        {props.data.map((exp, index) => (
            <div className="Experience-item" key={`Experience-${index}`}>
                 <h3>{exp.jobTitle} @ {exp.jobCompany} 
                    <span>{exp.startDate} - {exp.endDate}</span>
                </h3>                    
                <p>{exp.jobDescription}</p>
            </div>
            ))}
        </div>
    </div>
);

export default Experience;