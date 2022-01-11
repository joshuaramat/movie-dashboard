import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";  
import routes from "./routes";
import Header from "./component/Header";
import SignUP from "./pages/SignUp";
import Signin from "./pages/SignIn";
import HomeAdmin from "./component/admin/index";
import HomeUser from "./component/user/index";
import Protected from "./component/private/Protected";

function App() {
  return (
    <div className="App">
        <Container> 
            <h1>Movie App</h1>
            <Routes>;
              
            </Routes>
        </Container>
      <Router>
        <Header />
        <Protected />
        <Switch>
          <Route path="/signup" component={SignUP} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/admin" component={HomeAdmin} exact />
          <Route path="/user" component={HomeUser} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;