import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuLink extends Component {
  render() {
    const { title, route, currentRoute} = this.props;
    const active = currentRoute === route ? 'active' : '';
    const className = `no-flex ${ active }`;
    return(
      <div className={ className }>
        <Link to={ route }>
          { title }
        </Link>
      </div>
    )
  }
}

export default MenuLink;
