import React from 'react';
import resumeFile from '../../images/resume.pdf';

const Resume = ({popup}) => {

  return (
    <div className="resume" id="resume" onClick={() => popup()}>
    <a href="#home" className="resume__close">&times;</a>
      <iframe
      title="file"
      style={{ width: '90%', height: '90%' }}
      src={resumeFile}
      />
    </div>
  );
};

export default Resume;