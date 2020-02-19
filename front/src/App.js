import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import PageNotFound from './pages/PageNotFound';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import EnHome from './pages/en/EnHome';
import EnAbout from "./pages/en/EnAbout";
import EnLogin from "./pages/en/EnLogin";
import EnRegister from "./pages/en/EnRegister";
import EnRules from "./pages/en/EnRules";
import FiHome from './pages/fi/FiHome';
import FiAbout from "./pages/fi/FiAbout";
import FiLogin from "./pages/fi/FiLogin";
import FiRegister from "./pages/fi/FiRegister";
import FiRules from "./pages/fi/FiRules";

function App() {
  return (
  <Router>
  <div className="App">
      <Header />
      <Navbar />
        <main>
          <Switch>
            {/* English Routes */}
            <Route exact path="/en/about" render={(props) => <EnAbout {...props} />} />
            <Route exact path="/en/login" render={(props) => <EnLogin {...props} />} />
            <Route exact path="/en/register" render={(props) => <EnRegister {...props} />} />
            <Route exact path="/en/rules" render={(props) => <EnRules {...props} />} />
            <Route exact path="/en" render={(props) => <EnHome {...props} />} />
            {/* Finnish Routes */}
            <Route exact path="/fi/about" render={(props) => <FiAbout {...props} />} />
            <Route exact path="/fi/login" render={(props) => <FiLogin {...props} />} />
            <Route exact path="/fi/register" render={(props) => <FiRegister {...props} />} />
            <Route exact path="/fi/rules" render={(props) => <FiRules {...props} />} />
            <Route exact path="/fi" render={(props) => <FiHome {...props} />} />
            <Route exact path="/" render={() => <Redirect to="/en" />} />
            {/* Invalid Address */}
            <Route component={PageNotFound} />
          </Switch>
        </main>
    </div>
  </Router>
  );
}

export default App;