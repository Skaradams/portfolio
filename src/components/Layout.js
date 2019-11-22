import React from 'react'
import { Router, Link } from 'react-router-dom'
import profilePicture from "../assets/images/profile-picture.jpg"

const Layout = ({ children }) => (
  <div className="column">
    <div className="layout-header no-flex">
      <div className="container row">
        <div className="profile-picture no-flex" >
          <img src={ profilePicture } />
        </div>
        <div className="layout-navigation column">
          <div className="layout-menu row">
              <div className="no-flex active">
                <Link to="/">
                  Présentation
                </Link>
              </div>
            <div className="no-flex">
              <Link to="/experience">
                Parcours
              </Link>
            </div>
            <div className="no-flex">
              <Link to="/portfolio">
                Réalisations
              </Link>
            </div>
            <div className="no-flex">
              <Link to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="layout-info">
            <h1>
              Damien CORTICCHIATO
            </h1>
            <h2>
              Full-stack developper
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="layout-body column">
      <div className="container">
        { children }
      </div>
    </div>
    <div className="layout-footer no-flex">
      <div className="container">
        <div className="footer-wrapper row">
          <div className="networks">
            <h3>
              Mes réseaux
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Layout;
