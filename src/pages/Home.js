import React from 'react'
import StackRatio from "../components/StackRatio";
import ProgressBar from "../components/ProgressBar";
import SectionTitle from "../components/SectionTitle";

import timelineIcon from "../assets/images/icon-timeline.svg";
import atomLogo from "../assets/images/logo-atom.png";
import gitLogo from "../assets/images/logo-git2.png";
import npmLogo from "../assets/images/logo-npm.png";
import pgLogo from "../assets/images/logo-pg.png";
import technos from '../data/technos';

const Home = () => (
  <div className="page page-home">
    <div className="row">
      <div className="presentation-info">
        <div className="info-wrapper">
          <div className="info-icon icon-experience"/>
        </div>
        <div className="info-text">
          5 ans d'expérience en start-up
        </div>
      </div>
      <div className="presentation-info">
        <div className="info-wrapper">
          <div className="info-icon icon-responsive"/>
        </div>
        <div className="info-text">
          Forte sensibilité à l'UI/UX et design responsive
        </div>
      </div>
      <div className="presentation-info">
        <div className="info-wrapper">
          <div className="info-icon icon-code"/>
        </div>
        <div className="info-text">
          Respect des conventions pour un code propre et maintenable
        </div>
      </div>
    </div>

    <SectionTitle icon="code">
      Technologies utilisées
    </SectionTitle>

    <div className="section">
      <StackRatio valueBack="35" valueFront="65" />

      <div className="row">
        <div className="column tech-bars">
          { technos.front.map(techno => (
            <div className="no-flex">
              <ProgressBar
                position="left"
                value={ techno.value }
                title={ techno.title }
                className="no-flex"
              />
            </div>
          )) }
        </div>
        <div className="column tech-bars">
          { technos.back.map(techno => (
            <div className="no-flex row">
              <ProgressBar
                position="right"
                value={ techno.value }
                title={ techno.title }
              />
            </div>
          )) }
        </div>
      </div>
    </div>

    <SectionTitle icon="tools">
      Outils
    </SectionTitle>

    <div className="section row toolbox">
      <img src={ atomLogo } className="no-flex" />
      <img src={ npmLogo } className="no-flex" />
      <img src={ gitLogo } className="no-flex" />
      <img src={ pgLogo } className="no-flex" />
    </div>

  </div>
)

export default Home;
