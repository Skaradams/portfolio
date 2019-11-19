import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';
import './assets/css/index.scss';

function App() {
  return (
    <div className="App column">
      <Router>
        <Layout>
          <Route path='/' component={ Home } />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
