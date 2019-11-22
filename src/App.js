import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './assets/css/index.scss';

import './utils/IconLibrary';

function App() {
  return (
    <div className="App column">
      <Router>
        <Layout>
          <Route exact path='/' component={ Home } />
          <Route exact path='/experience' component={ Experience } />
          <Route exact path='/portfolio' component={ Portfolio } />
          <Route exact path='/contact' component={ Contact } />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
