import React from 'react';
import resume from '../../images/resume.pdf';
import '../styles/components/resume.css';

const Resume = () => (
  <div className="resumeWrapper">
      <object data={resume} className="resumeObject" type="application/pdf" />
  </div>
);

export default Resume;