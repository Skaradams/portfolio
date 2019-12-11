import React from 'react'
import portfolio from '../assets/images/portfolio/portfolio.png'
import githubIcon from '../assets/images/icon-github.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => (
  <div className="page portfolio-page">
    <div className="portfolio-list">
      <div className="portfolio-slot">
        <a href="http://www.damien-corti.fr" target="_blank">
          <div className="portfolio-thumb" id="portfolio">
          </div>
        </a>
        <div className="portfolio-title">
          Portfolio
          <div className="portfolio-links row">
            <a href="https://github.com/Skaradams/portfolio" target="_blank" className="no-flex">
              <img src={ githubIcon }/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio;
