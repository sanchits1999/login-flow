import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import {connect} from "react-redux"


const App = (props) => {

  return (
    <BrowserRouter>
      <div style={{ width: "100%", height: "100vh" }}>
        <Route path="/login" exact component={Login} />
        {props.username!=null?<Route path="/home" component={Home}/>:<Redirect to="/login"/>}
      </div>
    </BrowserRouter>
  )
}


const MapstatetoProps = (state) => {
  return {
      username: state.username
  }
}

export default connect(MapstatetoProps)(App)
