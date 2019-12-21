import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class Contact extends Component {
  state = {
    subject: '',
    body: ''
  }
  changeValue = (event) => {
    const key = event.target.getAttribute('name');
    let newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }
  submitForm = (event) => {
    const action = '/send_email'
    const api_url = process.env.NODE_ENV === 'production' ?
      `https://dc-portfolio-backend.herokuapp.com${ action }` :
      `http://localhost:4000${ action }`
    console.log(api_url);
    axios.post(api_url, this.state)
    event.preventDefault();
  }
  render() {
    return (
      <div className="page contact-page">
        <form onSubmit={ this.submitForm }>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              onChange={ this.changeValue }
            />
          </div>
          <div>
            <textarea
              name="body"
              onChange={ this.changeValue }
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;
