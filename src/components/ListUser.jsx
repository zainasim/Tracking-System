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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./InterviewQuestion.css";

import Logo from "../Asset/logo.png";
import Baby from "../Asset/baby.png";
import { NavLink } from "react-router-dom";
// import Modal from "../components/modal"
import lists from "../components/data_list";
import "./Home.css";
import axios from "axios";

function InterviewQuestion() {
  const [data, setData] = useState([]);
  let dbresult = [];

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const URL = "https://applicanttrackingsystem.herokuapp.com/questionnaire/get_all_users/";
  useEffect(() => {
    axios({
      method: "GET",
      url: URL,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        dbresult = response.data.response;
        setData(dbresult);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box className="header-bg1">
            <img className="logos" src={Logo} alt="Nothing to Show" />
          </Box>
        </Grid>

        <Grid item xs={8}>
          <img className="baby2" src={Baby} alt="Nothing to Show" />
        </Grid>
      </Grid>
      <div className="expense-items">
        <Grid container>
          <Grid item xs={12}>
            {data.map((list) => {
              return (
                <>
                  <div className="input-box">
                    <Grid container>
                      <Grid item xs={3}>
                        <label> value={list.first_name}</label>
                        <label> type="email" value={list.last_name}</label>
                        <label> type="email" value={list.email}</label>
                        <label> value={list.question}</label>
                        <label> value={list.question2}</label>
                        <input type="email" value={list.recording} />
                        <input type="email" value={list.recording2} />
                      </Grid>
                    </Grid>
                  </div>
                </>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default InterviewQuestion;
