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
import "./InterviewQuestion.css";
import Modal from "../components/Modal";
import Logo from "../Asset/logo.png";
import Baby from "../Asset/baby.png";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Home.css";

function InterviewQuestion() {
  const [data, setData] = useState([]);
  const [saveData, setsaveData] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let dbresult = [];

  const handleClose = () => setOpen(false);
  const HandleInsert = (val) => {
    setsaveData([...saveData, val]);
    setData([...data, val]);
  };

  const URL = "https://applicanttrackingsystem.herokuapp.com/questionnaire/get_all_questions/";
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

  const deleteQuestion = async (id) => {

    console.log(id)
    axios({
      method: "POST",
      url: "https://applicanttrackingsystem.herokuapp.com/questionnaire/add_or_delete_question/",
      data: {
        question: id,
        action: "delete",
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response)
        alert("Deleted Successfully")
        document.location.reload(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ListUsers = () => {
    navigate("/list");
  };


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box className="header-bg">
            <img className="logo" src={Logo} alt="Nothing to Show" />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img className="baby" src={Baby} alt="Nothing to Show" />
          <Box className="banner-baby">
            <Typography className="banner-txt">real people.</Typography>
            <Typography className="banner-txt">real voices.</Typography>
            <Typography className="banner-txt">real results.</Typography>
          </Box>
        </Grid>

        {/* {myArrays.map((y) => ( */}
        <Grid item xs={5}>
          <div className="expense-item">
            <h2 className="expense-item__price">
              {data.map((user) => {
                return (
                  <div className="admin-del">
                    <div id={user['textInputName']} className="ques">{user['textInputName']} ({user['textInputTime']}s)</div>
                    <button
                      onClick={() => deleteQuestion(user['textInputName'])}
                      id={user.question}
                      className="ques"
                    >
                      delete
                    </button>
                  </div>
                );
              })}
            </h2>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button onClick={() => setOpen(true)} className="modal-btn">
                Add Question
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        handleClose={handleClose}
        HandleInsert={HandleInsert}
      />
      {/* <Modal open={open} handleClose={handleClose}  /> */}
    </>
  );
}

export default InterviewQuestion;
