import React from 'react';
import { Component } from 'react';

const panes = ['test', 'test2', 'test3']
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

    return(
      <div className="page experience-page">
        <div className="experience-timeline row">
          { panes.map((pane, index) => {
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
          { panes.map((pane, index) => (
              <div className="pane no-flex" style={{ transform: paneStyle }} >
                { pane }
              </div>
            )) }

        </div>
      </div>
    );
  }
}

export default Experience;
