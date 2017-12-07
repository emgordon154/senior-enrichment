import React from 'react'

import Header from './Header'
import About from './About'
import CampusList from './CampusList'
import StudentList from './StudentList'
import CampusInfo from './CampusInfo'
// import StudentInfo from './StudentInfo'

import {Switch, Route, Redirect} from 'react-router-dom'


const App = () => (
  <header>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/campus" component={CampusList} />
      <Route path="/campus/:campusId" component={CampusInfo} />
      <Route exact path="/student" component={StudentList} />
      {/* <Route path="/student/:studentId" component={StudentInfo} /> */}
      <Redirect to="/" />
    </Switch>
  </header>
)

export default App
