import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import SideMenu from "./SideMenu"
import Calander from "./Calander"
import Calculator from "./Calculator"
import UserList from "./UserList"
import NewsFeeds from "./NewsFeeds"


//import "react-pro-sidebar/dist/css/styles.css";
import "../css/Header.css";
import Weather from "./Weather"
import { color, fontStyle } from "devexpress-dashboard/model/index.metadata"



function App() {

  return (
    <div className="row">
      <div className="col-md-2" style={{ background: "#FF9E9E", color: "red" }}>
        <SideMenu />
      </div>
      <div className="col-md-10">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
          <div className="w-100">
            {/* <div className="w-100">  style={{ maxWidth: "400px" }} */}
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/weather" component={Weather} />
                  <Route path="/Calander" component={Calander} />
                  <Route path="/Calculator" component={Calculator} />
                  <Route path="/userList" component={UserList} />
                  <Route path="/newsFeeds" component={NewsFeeds} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </Container>
      </div>
    </div>

  )
}

export default App
