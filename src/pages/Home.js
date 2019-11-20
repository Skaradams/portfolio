import React from 'react'
import StackRatio from "../components/StackRatio";
import timelineIcon from "../assets/images/icon-timeline.svg";
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
    <StackRatio />
  </div>
)

export default Home;
