import { useLocation, useNavigate } from "react-router-dom";

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
// import Modal from "../components/modal"
import "./Home.css";


import { useReactMediaRecorder } from "react-media-recorder";
import { json } from "body-parser";

const Media = () => {
  const navigate = useNavigate();
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const [data, setData] = useState('');
  const [buttonValue, setbuttonValue] = useState('Next Question');
  const [url, setURL] = useState('');
  let location = useLocation();
  let arr = location.state.data;

  useEffect(() => {
    if (typeof(Storage) !== "undefined") {
      arr = JSON.parse(sessionStorage.getItem("questions"))
      console.log("arr", arr)
      if(arr != null) {
        if(arr.length == 1) {
          const test = arr[0]['textInputName']
          setData(test)
          console.log("data", data)
          setbuttonValue("Submit")
        }
        else if(arr.length == 0) {
          navigate("/end");
        }
        else {
          const test = arr[0]['textInputName']
          setData(test)
          console.log("data", data)
        }
      }
    }
  })
  const nextQuestion = () => {
    arr = JSON.parse(sessionStorage.getItem("questions"))
    arr.shift();
    sessionStorage.setItem("questions", JSON.stringify(arr))

    setURL(mediaBlobUrl);
    debugger
    console.log(url) 
    document.location.reload(true)
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box className="header-bg1">
            <img className="logos" src={Logo} alt="Nothing to Show" />
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{marginBottom:"100px"}}>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={6} >
        <Box sx={{marginTop:"100px"}}>
        <Typography sx={{fontSize:"17px",color:"#e95e11"}}> QUESTION:</Typography>
        <Typography  sx={{fontSize:"15px"}}>{data}</Typography>
       
          <p>{status}</p>
          <div>
           
            <video src={mediaBlobUrl} controls autoPlay loop />
            <div className="main_div">
            <button onClick={startRecording} className="video-btn-3">RECORD</button>
            <button className="video-btn" onClick={stopRecording}>STOP</button>
            <button className="video-btn" onClick={stopRecording}>RETAKE</button>
            </div>
            <button id="next" className="video-btn2"onClick={() => {nextQuestion()}}>{buttonValue}</button>
        </div>
        </Box>
      </Grid>
      </Grid>
    </>
  );
};

export default Media;
