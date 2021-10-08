import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//IMPORT VARIABLES FROM OTHER FILES
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Event from "./pages/Event";
import Events from "./pages/Events";

// import HTMLexample from "./pages/HTMLexample";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/calendar">
                <Calendar />
              </Route>
              <Route exact path="/eventform">
                <Event />
              </Route>
              <Route exact path="/events">
                <Events />
              </Route>
              {/* <Route exact path="/htmlexample">
                <HTMLexample />
              </Route> */}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
