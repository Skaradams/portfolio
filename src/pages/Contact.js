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
    event.preventDefault();
    const action = '/send_email'
    const api_url = process.env.NODE_ENV === 'production' ?
      `https://dc-portfolio-backend.herokuapp.com${ action }` :
      `http://localhost:4000${ action }`
    console.log(this.state);
    // axios.post(api_url, this.state)
    axios({
      method: 'post',
      url: api_url,
      // data: this.state
    })
  }
  render() {
    return (
      <div className="page contact-page">
        <h3>
          Feel free to reach out
        </h3>
        <form className="contact-form" onSubmit={ this.submitForm }>
          <div className="contact-field">
            <input
              type="text"
              name="email"
              placeholder="Your email"
              onChange={ this.changeValue }
              />
          </div>
          <div className="contact-field">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={ this.changeValue }
            />
          </div>
          <div className="contact-field">
            <textarea
              name="body"
              placeholder="Message"
              className="contact-field"
              onChange={ this.changeValue }
            />
          </div>
          <div className="row">
            <button type="submit" className="no-flex">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;
