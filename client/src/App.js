import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  const [loggedin, setloggedin] = useState(false);
  const [data, setdata] = useState({});
  const loginfun = async (cred) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cred),
    });
    const data = await res.json();
    if (data.email === "Successfully logged in") {
      setloggedin(true);
      localStorage.setItem("auth_token", data.auth_token);
    } else if (data.email === "User Does not exist") {
      return data.email;
    } else if (data.email === "Password is incorrect") {
      return data.email;
    }
  };
  const signupfun = async (cred) => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cred),
    });
    const data = await res.json();
    if (data.email === "User Created Successfully") {
      return data.email;
    } else if (data.email === "Already exists") {
      return data.email;
    }
  };
  const getdata = async () => {
    const res = await fetch("/api/profile", {
      headers: {
        "content-type": "application/json",
        auth_token: localStorage.getItem("auth_token"),
      },
    });
    const data = await res.json();
    setdata(data);
    if (data.email) {
      setloggedin(true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      if (localStorage.getItem("auth_token").length > 10 && !loggedin) {
        getdata();
      }
      if (localStorage.getItem("auth_token").length > 10 && loggedin) {
        getdata();
      }
    }
  }, [loggedin]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home loggedin={loggedin} />} />
          <Route
            path="/login"
            element={<Login loginfun={loginfun} loggedin={loggedin} />}
          />
          <Route
            path="/signup"
            element={<SignUp signupfun={signupfun} loggedin={loggedin} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                loggedin={loggedin}
                setloggedin={setloggedin}
                data={data}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
