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

import Logo from "../Asset/logo.png";
import Baby from "../Asset/baby.png";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import Modal from "../components/modal"
import "./Home.css";
import Media from "./Media";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { fontSize } from "@mui/system";

function InterviewQuestion() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let dbresult = [];

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

  const toOtherComponent = () => {
    //add this local in API response
    sessionStorage.setItem("questions", JSON.stringify(data));
    navigate("/media", { state: { data } });
  };

  const downloadTextFile = () => {
    const ques = [];
    data.map((user) => {
      ques.push(user["textInputName"])
      ques.push("\n")
    })
    const element = document.createElement('a');
    const file = new Blob([ques], {
    });

    element.href = window.URL.createObjectURL(file);
    element.setAttribute(
      'download',
      `Questions.doc`,
    );
    // element.download = "NewDocument.txt";
    document.body.appendChild(element);
    element.click();
    element.parentNode.removeChild(element);
  }

  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={4}>
          <Box className="header-bg">
            <img className="logo" src={Logo} alt="Nothing to Show" />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={9} >
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "300px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Download Interview Questions</Typography>
            <FileDownloadIcon onClick={downloadTextFile} sx={{ background: "#5d58dd", fontSize: "35px", width: "20%", color: "white", marginTop: "10px" }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          <div className="main">
            <div className="main-box">
              <h5 className="welcome">
                Welcome ! <br></br>
                Thanks for taking the time to apply for our position.
              </h5>
            </div>


            <div className="box-text">
              Your interview is about to start! The browser will prompt you to record using your
              computer's camera and microphone. Please make sure you're all set in aquiet space
            </div>

            <div className="box-text1">
              <font color="white" fontWeight="bold">Important:</font> Once you submit each section, you will be unable to return and edit your
              response in that section
            </div>
          </div>

          <div className="expense-item">
            <h2 className="expense-item__price">
            Questions to Answer
              {data.map((user) => {
                return (
                  <div>
                    <div id={user["textInputName"]} className="ques">
                      {user["textInputName"]} ({user["textInputTime"]}s)
                    </div>
                  </div>
                );
              })}
              {/* <ul>{itemList}</ul> */}
            </h2>
          </div>
          <Button
            onClick={() => {
              toOtherComponent();
            }}
            sx={{
              margin: "20px 0px 0px 0px",
              background: "#575756", padding: "10px 60px",
              color: "white", fontWeight: "bold", '&:hover': {
                background: "#e95e11",
              }
            }}
          // className="modal-btn"
          >
            START
          </Button>
        </Grid>
      </Grid>
    </>
  );
  // return (
  //   <>
  //     <Grid container spacing={2}>
  //       <Grid item xs={4}>
  //         <Box className="header-bg">
  //           <img className="logo" src={Logo} alt="Nothing to Show" />
  //         </Box>
  //       </Grid>
  //     </Grid>

  //     <Grid container spacing={4}>
  //       <Grid item xs={12} sm={12} md={7} lg={7}>
  //         <img className="baby" src={Baby} alt="Nothing to Show" />
  //         <Box className="banner-baby">
  //           <Typography className="banner-txt">real people.</Typography>
  //           <Typography className="banner-txt">real voices.</Typography>
  //           <Typography className="banner-txt">real results.</Typography>
  //         </Box>
  //       </Grid>

  //       <Grid item xs={5}>
  //         <div className="expense-item">
  //           <h2 className="expense-item__price">
  //             <ul>{itemList}</ul>
  //           </h2>
  //         </div>
  //         {/* <NavLink to="/media" questions = {ques}>
  //           Next Step
  //         </NavLink>         */}
  //        <Button onClick={() => {toOtherComponent()}} className="modal-btn">
  //           Add Question
  //         </Button>
  //       </Grid>
  //     </Grid>
  //   </>
  // );
}

export default InterviewQuestion;
