import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import Logo from "../Asset/logo.png";
import Baby from "../Asset/baby.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { fontWeight } from "@mui/system";
import Modal from "../components/modal/index";


function LandPage() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const nextComponent = () => {
        navigate("/home");
    }

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className="header-bg">
              <img className="logo" src={Logo} alt="Nothing to Show" />
            </Box>
          </Grid>
          <Grid item xs={8}>
          <Button onClick={handleOpen} className="modal-btn">
            Admin
          </Button>
          </Grid>
        </Grid>
           
        <Grid container spacing={6} sx={{ padding: "40px 0" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img className="baby" src={Baby} alt="Nothing to Show" />
            <Box className="banner-baby">
              <Typography className="banner-txt">A NEW CARRER BEGINS HERE</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>


            <Box>
              <Typography sx={{ margin: "20px 30px 20px 80px", fontWeight: "bold" }}>Thank you for taking the time to interview with our company today.</Typography>
              <Typography sx={{ margin: "0px 30px 20px 80px", fontWeight: "bold" }}>
              You will be completing a one-way video interview with 12 questions. 
              For each question you will record a video response using your webcam. 
              You will have the opportunity for retakes.   
                </Typography>
                <Typography sx={{ margin: "0px 30px 0px 80px", fontWeight: "bold" }}>1. Fill in some basic information about yourself </Typography>
                <Typography sx={{ margin: "0px 30px 0px 80px", fontWeight: "bold" }}>2. Set up your camera </Typography>
                <Typography sx={{ margin: "0px 30px 0px 80px", fontWeight: "bold" }}>3. Answer 12 video question</Typography>
               
                <Button onClick={nextComponent}
                 sx={{ margin: "20px 30px 0px 80px", 
                background: "#575756", padding: "10px 60px", 
                color:"white" ,fontWeight:"bold", '&:hover': {
                  background: "#e95e11",    
                               
                  }}}>
                  CONTINUE</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Modal open={open} handleClose={handleClose} />

    </>
  );
}

export default LandPage;
