import React, { useState, useEffect } from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Alert, AlertTitle } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
function SignUp({ signupfun, loggedin }) {
  const navigate = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setvisible] = useState(false);
  const [alert, setalert] = useState("");
  const [error, seterror] = useState([
    {
      firstname: false,
      lastname: false,
      email: false,
      phone: false,
      address: false,
      password: false,
    },
  ]);
  const [errormessage, seterrormessage] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      password: "",
    },
  ]);
  const submitfun = async (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      password === ""
    ) {
      if (firstname === "") {
        seterror((prevState) => ({ ...prevState, firstname: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          firstname: "Please Enter First Name",
        }));
      } else {
        seterror((prevState) => ({ ...prevState, firstname: false }));
        seterrormessage((prevState) => ({
          ...prevState,
          firstname: "",
        }));
      }
      if (lastname === "") {
        seterror((prevState) => ({ ...prevState, lastname: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          lastname: "Please Enter Last Name",
        }));
      } else {
        seterror((prevState) => ({ ...prevState, lastname: false }));
        seterrormessage((prevState) => ({
          ...prevState,
          lastname: "",
        }));
      }
      if (email === "") {
        seterror((prevState) => ({ ...prevState, email: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          email: "Please Enter Email",
        }));
      } else {
        seterror((prevState) => ({ ...prevState, email: false }));
        seterrormessage((prevState) => ({
          ...prevState,
          email: "",
        }));
      }
      if (phone === "") {
        seterror((prevState) => ({ ...prevState, phone: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          phone: "Please Enter Phone",
        }));
      } else {
        seterror((prevState) => ({ ...prevState, phone: false }));
        seterrormessage((prevState) => ({
          ...prevState,
          phone: "",
        }));
      }
      if (address === "") {
        seterror((prevState) => ({ ...prevState, address: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          address: "Please Enter Address",
        }));
      } else {
        seterror((prevState) => ({ ...prevState, address: false }));
        seterrormessage((prevState) => ({
          ...prevState,
          address: "",
        }));
      }
      if (password === "") {
        seterror((prevState) => ({ ...prevState, password: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          password: "Please Enter Password",
        }));
      } else {
        seterror((prevState) => ({ ...prevState, password: false }));
        seterrormessage((prevState) => ({
          ...prevState,
          password: "",
        }));
      }
    } else {
      seterror([
        {
          firstname: false,
          lastname: false,
          email: false,
          phone: false,
          address: false,
          password: false,
        },
      ]);
      seterrormessage([
        {
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          address: "",
          password: "",
        },
      ]);
      if (phone.length !== 10) {
        seterror((prevState) => ({ ...prevState, phone: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          phone: "Please Enter Valid Phone",
        }));
      } else if (!email.includes(".") || !email.includes("@")) {
        seterror((prevState) => ({ ...prevState, email: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          email: "Please Enter Valid Email",
        }));
      } else if (password.length < 8) {
        seterror((prevState) => ({ ...prevState, password: true }));
        seterrormessage((prevState) => ({
          ...prevState,
          password: "Password should be minimun 8 characters",
        }));
      } else {
        const data = await signupfun({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          phone: phone,
          password: password,
        });
        setalert(data);
      }
    }
  };
  useEffect(() => {
    if (loggedin) {
      navigate("/profile");
    }
  }, [loggedin]);
  return (
    <div className="signup">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={submitfun}>
        <TextField
          error={error.firstname}
          label="First Name"
          variant="outlined"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          margin="normal"
          helperText={errormessage.firstname}
        />
        <TextField
          error={error.lastname}
          label="Last Name"
          variant="outlined"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          margin="normal"
          helperText={errormessage.lastname}
        />
        <TextField
          error={error.email}
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          margin="normal"
          helperText={errormessage.email}
        />
        <TextField
          error={error.phone}
          type="number"
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          margin="normal"
          helperText={errormessage.phone}
        />
        <TextField
          error={error.address}
          label="Address"
          variant="outlined"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          margin="normal"
          helperText={errormessage.address}
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
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
      <Link className="link-signin" to="/login">
        <Button className="link-button" variant="contained">
          Sign In
        </Button>
      </Link>
      {alert === "User Created Successfully" && (
        <Alert severity="success">
          <AlertTitle>User Created Successfully</AlertTitle>
        </Alert>
      )}
      {alert === "Already exists" && (
        <Alert severity="info">
          <AlertTitle>User Already Exists</AlertTitle>
        </Alert>
      )}
    </div>
  );
}

export default SignUp;
