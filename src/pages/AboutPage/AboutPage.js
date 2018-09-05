import React from 'react';
import PropTypes from 'prop-types';
// import ScrollToNext from '../../components/ScrollToNext';
// import './style.scss';

import ScrollToNext from '@components/ScrollToNext';
import './style';


const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Tentang Saya</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              {/* I like <span className="highlight">JavaScript</span> and
              everything web. */}
              <b>Javascript adalah gairah</b>. Dan segala-nya tentang Web, bergairah.
            </p>
            <p>
              {/* When my dev senses kick-in I build presumably{' '}
              <span className="highlight"> awesome stuff</span>. I stay close to
              the community and try to keep tabs with the pace at which the web
              is evolving. I also like to{' '}
              <span className="highlight">blog</span> what I learn. */}
              Hai saya {' '}  <span className="highlight"> Doel</span>, saat ini saya bekerja di salah satu perusahaan vendor IT di Jakarta, dan bagi teman- temen yang perlu bantuan <i>freelance</i> atau ada project seputar dunia web aplikasi, <i>feel free</i> kirim - kirim email oportunity projectnya :)
            </p>
            <p>
              Karena setiap hal memiliki cerita, maka portofolio memudahkan 'pernak-pernik' cerita tsb ;)
            </p>
            {/* <p>
              React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and
              AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
            </p> */}
            <p className="text-emoji" style={{ color: colorPrimary }}>
              <i>Cekidot</i> portofolio owe \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
