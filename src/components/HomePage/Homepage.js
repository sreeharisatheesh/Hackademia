import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <p className="example-text">E.G., "Design a software development lifecycle flowchart for an agile team"</p>
      <textarea className="input-field" placeholder="Enter your text here" />
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default Homepage;

