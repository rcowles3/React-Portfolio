import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import FugaCaseStudy from './components/FugaCaseStudy';
import JdCaseStudy from './components/JdCaseStudy';
import EgCaseStudy from './components/EgCaseStudy';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route path="/case-studies/fuga-energy" component={FugaCaseStudy} />
      <Route path="/case-studies/jd-hill-ctv" component={JdCaseStudy} />
      <Route path="/case-studies/everything-goes-az" component={EgCaseStudy} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
