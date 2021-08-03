import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About/About'
import AboutSingle from './Components/About/AboutSingle/AboutSingle'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/home' component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/about/:id' component={AboutSingle} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
