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
import "./Home.css";
import { fontWeight } from "@mui/system";
import Modal from "../components/modal/index";


function LandPage() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
              <Typography className="banner-txt">Thank You</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>


            <Box sx={{marginTop:"100px"}}>
              <Typography sx={{ textAlign:"center", fontWeight: "bold" }}>INTERVIEW COMPLETE !</Typography>
              <Typography sx={{ margin: "10px 30px 20px 80px", }}>
              You have successfully completed your interview. we thank youfor taking the time to interview 
              with us. Someone will be in touch shortly.    
                </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Modal open={open} handleClose={handleClose} />

    </>
  );
}

export default LandPage;
