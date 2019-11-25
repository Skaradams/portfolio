import React from 'react'
import MenuLink from './MenuLink';
import { withRouter } from 'react-router-dom';
import profilePicture from "../assets/images/profile-picture.jpg"

const Layout = ({ children, location }) => (
  <div className="column">
    <div className="layout-header no-flex">
      <div className="container row">
        <div className="profile-picture no-flex" >
          <img src={ profilePicture } />
        </div>
        <div className="layout-navigation column">
          <div className="layout-menu row">
            <MenuLink title="Présentation" route="/" currentRoute={ location.pathname } />
            <MenuLink title="Parcours" route="/experience" currentRoute={ location.pathname } />
            <MenuLink title="Réalisations" route="/portfolio" currentRoute={ location.pathname } />
            <MenuLink title="Contact" route="/contact" currentRoute={ location.pathname } />
          </div>
          <div className="layout-info">
            <h1>
              Damien CORTICCHIATO
            </h1>
            <h2>
              Full-stack developer
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

export default withRouter(Layout);
