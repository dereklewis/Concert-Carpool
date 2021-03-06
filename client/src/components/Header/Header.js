import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-dark text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-light" to="/">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Concert Carpool
          </h1>
        </Link>
        <p
          className="m-0 text-light"
          style={{ fontSize: "1.75rem", fontWeight: "700" }}
        >
          Welcome to Concert Carpool! Going to concerts is great, but sometimes
          it’s a pain to coordinate getting to the venue. Our site helps you
          concert goers find prospective rides to carpool together to your
          concert venue.
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/">
                Back to Homepage
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/calendar">
                View Events Near You
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/eventform">
                Fill Out A New Carpool Form
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/events">
                Find A Concert To Carpool To!
              </Link>
              <button className="btn btn-lg btn-info m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
