import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { Button } from "@mui/material";
function Home({ loggedin }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedin) {
      navigate("/profile");
    }
  }, [loggedin]);
  return (
    <div className="home">
      <h1>Welcome to Auth App</h1>
      <h3>Please Login to Continue</h3>
      <Link className="link-signin" to="/login">
        <Button variant="contained">Login</Button>
      </Link>
      <Link className="link-signup" to="/signup">
        <Button variant="contained">Signup</Button>
      </Link>
    </div>
  );
}

export default Home;
