import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import BrowserNotes from '@components/BrowserNotes';
// import SocialIcons from '../../components/SocialIcons';
// import Nav from '../../components/Nav';
// import ScrollToNext from '../../components/ScrollToNext';
// import BrowserNotes from '../../components/BrowserNotes';

import './style.scss';
// import './style';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hai...</div>
          <div className="tagline">
            {/* Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja */}
            Saya <b>Doel :</b>  Java | NodeJS | ReactJS | Javascript Developer
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
