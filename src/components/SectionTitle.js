import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SectionTitle = ({icon, children}) => (
  <div className="section-title">
    <FontAwesomeIcon icon={ icon } className="fa-icon" />
    <h3>
      { children }
    </h3>
  </div>
)

export default SectionTitle;
