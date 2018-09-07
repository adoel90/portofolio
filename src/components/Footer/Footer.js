import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>Di support oleh <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>React</a> & <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Github Page</a> <span role="img" aria-label="heart">❤️</span></div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;