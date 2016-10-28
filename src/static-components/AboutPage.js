import React from 'react';
import {Link} from 'react-router';
import '../static-styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        Hello! You found me, you clever git. I hope this boilerplate helps you in your endeavours.
      </p>
        <a href="https://github.com/KyleApfel">https://github.com/KyleApfel</a>
    </div>
  );
};

export default AboutPage;
