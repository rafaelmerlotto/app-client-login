import { FC } from "react";
import { useAuth } from "./authentication/auth";
import { Register } from "./pages/Register";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { LoginPage } from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/Login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>



  );
}

export default App;


const PrivateRoute: FC<any> = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};