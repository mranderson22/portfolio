import React from 'react';
import resumeFile from '../../images/resume.pdf';

const Resume = ({popup}) => {

  return (
    <div className="resume" id="resume" onClick={() => popup()}>
    <span className="resume__close">&times;</span>
      <object
      title="file"
      style={{ width: '90%', height: '90%' }}
      data={resumeFile}
      />
    </div>
  );
};

export default Resume;