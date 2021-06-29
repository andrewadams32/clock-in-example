import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./pages/auth/Login2";
import Signup from "./pages/auth/Signup";
import Test from "./pages/Test";

import './App.css'
import Index from "./pages";
import { useEffect } from "react";
import AuthService from "./services/AuthService";
// import { useAuth } from "./state/AuthContext";

function App() {
  // const [auth, setAuth] = useAuth()
  // useEffect(() => {
  //   AuthService.getMe().then((me) => {
  //     setAuth({
  //       ...auth,
  //       isLoggedIn: true,
  //       user: me
  //     })
  //   }).catch(() => {
  //     setAuth({
  //       ...auth,
  //       isLoggedIn: false
  //     })
  //   })
  // },[])
  return (
    <Switch>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/test" exact>
        <Test />
      </Route>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route>
        <Redirect to="/login"/>
      </Route>
    </Switch>
  )
}

export default App;
