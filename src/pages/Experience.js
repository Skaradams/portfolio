import React from 'react';
import { Component } from 'react';
import SectionTitle from '../components/SectionTitle';

import experiences from '../data/experience';

class Experience extends Component {
  state = {
    currentPane: 0
  }
  switchPane = (pane) => {
    this.setState({
      currentPane: pane
    })
  }
  render() {
    const paneStyle = `translate(-${ 100 * this.state.currentPane }%)`;

    return (
      <div className="page experience-page">
        <div className="experience-timeline row">
          { experiences.map((experience, index) => {
            const active = this.state.currentPane >= index ? 'active' : '';
            const className = `timeline-dot no-flex ${ active }`
            return(
              <div className="timeline-slot row">
                <div className={ className } onClick={ () => { this.switchPane(index) } }></div>
              </div>
            );
          }) }
        </div>
        <div className="experience-panes row">
          { experiences.map((experience, index) => (
              <div className="pane no-flex" style={{ transform: paneStyle }} >
                <SectionTitle icon="code">
                  { experience.company }
                </SectionTitle>
              </div>
            )) }

        </div>
      </div>
    );
  }
}

export default Experience;
