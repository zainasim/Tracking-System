import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Container,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Logo from "../Asset/logo.png";
import Baby from "../Asset/baby.png";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../components/modal/index";
import axios from "axios";
import "./Home.css";
import { fontWeight } from "@mui/system";

function Home() {
  const [open, setOpen] = useState(false);
  const [textInputFname, setFnameInput] = React.useState("");
  const [textInputLname, setLnameInput] = React.useState("");
  const [textInputEmail, setEmailInput] = React.useState("");
  const [textInputLocation, setLocationInput] = React.useState("");
  const [textInputCity, setCityInput] = React.useState("");
  const [textInputStreet, setStreetInput] = React.useState("");
  const [textInputZip, setZipInput] = React.useState("");
  // const [phone, setPhone] = React.useState("");





  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleVavidation = () => {
    if (textInputFname == "") {
      return false;
    }
    if (textInputLname == "") {
      return false;
    }
    if (textInputEmail == "") {
      return false;
    }
    return true;
  };

  const handleClick = () => {
    const val = handleVavidation();
    if (val) {
      let result = textInputCity.concat(" ", textInputStreet, ",", textInputZip);
      setLocationInput(result);
      axios
        .post(
          "https://applicanttrackingsystem.herokuapp.com/accounts/registration/",
          {
            data: {
              first_name: textInputFname,
              last_name: textInputLname,
              email: textInputEmail,
              location: result,
            },
          }
        )
        .then(function (response) {
          if (response.data.response == "true") {
            navigate("/question");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please fill the Missing Details");
    }
  };

  const handleFnameChange = (event) => {
    setFnameInput(event.target.value);
  };
  const handleLnameChange = (event) => {
    setLnameInput(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocationInput(event.target.value);
  };
  // const handlePhoneChange = (event) => {
  //   setPhone(event.target.value);
  // };
  const handleCityChange = (event) => {
    setCityInput(event.target.value);
  }
  const handleStreetChange = (event) => {
    setStreetInput(event.target.value);
  }
  const handleZipChange = (event) => {
    setZipInput(event.target.value);
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box className="header-bg">
            <img className="logo" src={Logo} alt="Nothing to Show" />
          </Box>
        </Grid>
      </Grid>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={7}></Grid>

          <Grid item xs={5} sx={{ margin: "60px 0" }}>
            <Typography>
              Please provide your contact information so we can reach you after
              you have completed the interview
            </Typography>
            <div className="fname">Name </div>
            <input
              onChange={handleFnameChange}
              type="text"
              placeholder="First Name"
              label="First Name"
            />
            <input
              onChange={handleLnameChange}
              type="text"
              label="Last Name"
              placeholder="Last Name"
              className="h-form0"
            />

            <div className="fname">E-MAIL </div>
            <input
              onChange={handleEmailChange}
              type="email"
              label="email"
              className="h-form"
            />

            {/* <div className="fname">PHONE </div>
            <input
              onChange={handlePhoneChange}
              type="text"
              label="phone"
              className="h-form"
            /> */}

            <div className="fname">LOCATION</div>
            <input
              onChange={handleCityChange}
              type="text"
              label="City"
              placeholder="CITY"
              className="location-form"
            />
            <input
              onChange={handleStreetChange}
              type="text"
              label="Street"
              placeholder="ST"
              className="location-form1"
            />
            <input
              onChange={handleZipChange}
              type="text"
              label="Zip"
              placeholder="ZIP"
              className="location-form2"
            />

            <Button
              onClick={handleClick}
              sx={{
                margin: "20px 0px 0px 0px",
                background: "#575756",
                padding: "10px 60px",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  background: "#e95e11",
                },
              }}
            >
              CONTINUE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
