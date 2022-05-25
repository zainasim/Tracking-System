import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";



import "../modal/modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose }) {
  const [textInputEmail, setEmailInput] = React.useState('');
  const [textInputPassword, setPasswordInput] = React.useState('');
  const [isloaded, setisLoaded] = React.useState(false);
  const navigate = useNavigate();


  const handleClick = () => {
    setisLoaded(true);
    axios({
      method: "POST",
      url: "https://applicanttrackingsystem.herokuapp.com/accounts/login/",
      data:{email : textInputEmail, password : textInputPassword},
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if(response.data.response === 'true') {
          navigate('/dashboard')
        }
        else {
          alert("Incorrect Credentials")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">/
            User Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <Grid container>
            <Grid item xs={12} className="mainform">
              <Typography className="form">Email</Typography>
              <input onChange={handleEmailChange} type="text" id="fname" name="fname" />
            </Grid>

            <Grid item xs={12} className="mainform">
              <Typography className="form">Password:</Typography>
              <input onChange={handlePasswordChange} type="password" id="fname" name="fname" />
            </Grid>

            <Grid item xs={12}>
              <Typography onClick={handleClick} className="form-btn">Sign Up </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
