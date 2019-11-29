import React from 'react';
import { Component } from 'react';
import SectionTitle from '../components/SectionTitle';
import StackRatio from "../components/StackRatio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <div className="timeline-title">{ experience.title }</div>
              </div>
            );
          }) }
        </div>
        <div className="experience-panes row">
          { experiences.map((experience, index) => (
            <div className="pane no-flex" style={{ transform: paneStyle }} >
              <SectionTitle icon="briefcase">
                { experience.company }
              </SectionTitle>
              <div className="experience-product">
                <FontAwesomeIcon icon="arrow-right" className="fa-icon"/>
                { experience.product }
              </div>
              <div className="section experience-content">
                <StackRatio valueBack={ experience.back } valueFront={ experience.front } />
                <div className="description">
                  { experience.description }
                </div>
                <div className="tasks">
                  <ul>
                    { experience.tasks.map(task => (
                      <li className="row">
                        <FontAwesomeIcon icon="check" className="fa-icon no-flex"/>
                        <span>
                          { task }
                        </span>
                      </li>
                    )) }
                  </ul>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default Experience;
