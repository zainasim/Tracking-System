import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Modal from "../components/modal/index";

function Applicant() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    let dbresult = [];
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

    const nextComponent = () => {
        navigate("/dashboard");
    }
    const applicantComponent = () => {
      navigate("/applicant");
    }
    const settingComponent = () => {
      navigate("/setting");
    }

    const deleteUser = async (email) => {
      console.log(email)
      axios({
        method: "POST",
        url: "https://applicanttrackingsystem.herokuapp.com/questionnaire/delete_user/",
        data: {
          email: email,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
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
         
         <Grid item xs={4} sx={{marginLeft:"100px"}}>
            {data.map((list) => {
              return (
                <>
                  <div className="input-box">
                        <div className="input-div">
                        <label> NAME={list.first_name}</label>
                        <label> EMAIL={list.email}</label>
                        <label> Location={list.location}</label>
                        {/* <label> DATE={list.date}</label> */}
                        </div>
                        <div onClick={() => deleteUser(list.email)} className="applicant-btn">DELETE</div>
                  </div>
                </>
              );
            })}
          </Grid>

     </Grid>

       
        

    </>
  );
}

export default Applicant;
