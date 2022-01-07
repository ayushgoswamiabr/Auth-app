import React, { useState, useEffect } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { Button, IconButton, Alert, AlertTitle } from "@mui/material";
function Login({ loginfun, loggedin }) {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [alert, setalert] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setvisible] = useState(false);
  const [error, seterror] = useState([{ email: false, password: false }]);
  const [errormessage, seterrormessage] = useState([
    { email: "", password: "" },
  ]);
  const submitfun = async (e) => {
    e.preventDefault();
    if (email === "" || !email.includes("." || !email.includes("@"))) {
      if (password === "") {
        seterror((prevState) => ({
          ...prevState,
          email: true,
          password: true,
        }));
        if (email === "") {
          seterrormessage((prevState) => ({
            ...prevState,
            email: "Please Enter Email",
            password: "Please Enter Password",
          }));
        } else {
          seterrormessage((prevState) => ({
            ...prevState,
            email: "Please Enter Valid Email",
            password: "Please Enter Password",
          }));
        }
      } else {
        seterror((prevState) => ({
          ...prevState,
          email: true,
          password: false,
        }));
      }
    } else if (password === "") {
      seterror((prevState) => ({
        ...prevState,
        email: false,
        password: true,
      }));
      seterrormessage((prevState) => ({
        ...prevState,
        password: "Please Enter Password",
        email: "",
      }));
    } else {
      seterror((prevState) => ({
        ...prevState,
        email: false,
        password: false,
      }));
      seterrormessage((prevState) => ({
        ...prevState,
        email: "",
        password: "",
      }));
      const status = await loginfun({
        email: email,
        password: password,
      });
      setalert(status);
    }
  };
  useEffect(() => {
    if (loggedin) {
      navigate("/profile");
    }
  }, [loggedin, navigate]);
  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={submitfun}>
        <TextField
          error={error.email}
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setemail(e.target.value)}
          margin="normal"
          helperText={errormessage.email}
        />
        <TextField
          error={error.password}
          label="Password"
          type={visible ? "text" : "password"}
          variant="outlined"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          margin="normal"
          helperText={errormessage.password}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  setvisible(!visible);
                }}
                onMouseDown={() => {
                  setvisible(!visible);
                }}
                edge="end"
              >
                {visible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        ></TextField>
        <Button type="submit" variant="contained" fullWidth>
          Sign In
        </Button>
      </form>
      <Link className="link-signup" to="/signup">
        <Button className="link-button" variant="contained">
          Sign Up
        </Button>
      </Link>
      {alert === "User Does not exist" && (
        <Alert severity="error">
          <AlertTitle>User Does Not Exists</AlertTitle>
        </Alert>
      )}
      {alert === "Password is incorrect" && (
        <Alert severity="error">
          <AlertTitle>Password is incorrect</AlertTitle>
        </Alert>
      )}
    </div>
  );
}

export default Login;
