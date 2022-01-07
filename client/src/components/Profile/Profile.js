import React, { useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
function Profile({ setloggedin, loggedin, data }) {
  const navigate = useNavigate();
  const logoutfun = () => {
    localStorage.setItem("auth_token", "");
    setloggedin(false);
  };
  useEffect(() => {
    if (!loggedin) {
      navigate("/login");
    }
  }, [loggedin, navigate, data]);
  if (data.firstname === undefined) return <div></div>;
  return (
    <div className="profile">
      <h1>Hello {data.firstname}</h1>
      <h3>Profile Page</h3>
      <div className="profile-data">
        <TextField
          label="First Name"
          variant="outlined"
          value={data.firstname}
          margin="normal"
          aria-readonly={true}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={data.lastname}
          aria-readonly={true}
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          value={data.email}
          aria-readonly={true}
          margin="normal"
        />
        <TextField
          label="Phone"
          variant="outlined"
          value={data.phone}
          aria-readonly={true}
          margin="normal"
        />
        <TextField
          label="Address"
          variant="outlined"
          value={data.address}
          aria-readonly={true}
          margin="normal"
        />
        <Button variant="contained" onClick={logoutfun}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Profile;
