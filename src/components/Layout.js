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
              Présentation
            </div>
            <div className="no-flex">
              Parcours
            </div>
            <div className="no-flex">
              Réalisations
            </div>
            <div className="no-flex">
              Contact
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
