import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar.js';
import User from './components/user/User.js';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
const App = () => {
  // async componentDidMount() {
  //   this.setState({ loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false});
  // }

    return (
      <GithubState>
        <AlertState>
      <Router>
                <Navbar title="Github Finder"/>
               <div className="container">
                      <Alert />
                      <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About} />  
                        <Route exact path='/user/:login' component={User} />
                        <Route component={NotFound}/>
                        </Switch>
               </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

export default App;
