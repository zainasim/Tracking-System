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
import lists from "../components/data_list";

import Modal from "../components/modal/index";

function Setting() {

    const navigate = useNavigate();
    const nextComponent = () => {
        navigate("/dashboard");
    }
    const applicantComponent = () => {
        navigate("/applicant");
    }
    const settingComponent = () => {
      navigate("/setting");
    }
    const adminQuestion = () => {
      navigate("/admin");
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
           
        <Grid container  sx={{ padding: "40px 0" }}>
         <Grid item xs={12}>
          <Typography sx={{textAlign:"center", fontSize:"25px",fontWeight:"500", marginTop:"80px"}}>
              WELCOME ADMINISTRATOR
          </Typography>
          <Typography sx={{textAlign:"center", fontSize:"18px",fontWeight:"500", marginTop:"10px"}}>
              APPLICANT TRACKING
          </Typography>
          
         </Grid>
         </Grid>
      

         <Grid container spacing={4}  sx={{ padding: "40px 0" }}>

         <Grid item xs={2} >
             <Box sx={{borderRight: "1px solid" ,padding:"35px 0"}}>
             <Typography onClick={nextComponent} sx={{fontSize: "15px", fontWeight: "700",padding:"15px 0"}}>
                 DASHBOARD</Typography>
             <Typography onClick={applicantComponent} sx={{fontSize: "15px", fontWeight: "700",padding:"15px 0"}}>
                 APPLICANTS</Typography>
             <Typography onClick={settingComponent} sx={{fontSize: "15px", fontWeight: "700",padding:"15px 0"}}>
                 SETTINGS</Typography>
             </Box>
         </Grid>
         
         <Grid item xs={8} >
         <Typography sx={{ marginTop:"10px",fontSize:"15px",fontWeight:"500"}}>
              ADD NEW ADMINS USERS
          </Typography>
          <Typography onClick={adminQuestion} sx={{margnTop:"10px", fontSize:"15px",fontWeight:"500"}}>
              ADD/REMOVE INTERVIEW QUESTIONS
          </Typography>
          <Typography sx={{margnTop:"10px", fontSize:"15px",fontWeight:"500"}}>
              BULK DELETE APPLICANTS
          </Typography>
           <Typography sx={{margnTop:"10px", fontSize:"15px",fontWeight:"500"}}>
              EMAIL NOTIFICATIONS
          </Typography>
          </Grid>

     </Grid>

       
        

    </>
  );
}

export default Setting;
