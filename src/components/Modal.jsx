import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import "../components/model.css";
import axios from "axios";

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

export default function BasicModal({ open, handleClose, HandleInsert }) {
  const [textInputName, setNameInput] = React.useState('');
  const [textInputTime, setTimeInput] = React.useState('');
  const [isloaded, setisLoaded] = React.useState(false);
  const handleClick = () => {
    if(!isloaded) {
      HandleInsert({textInputName,textInputTime})
      setisLoaded(true);
      axios({
        method: "POST",
        url: "https://applicanttrackingsystem.herokuapp.com/questionnaire/add_or_delete_question/",
        data: {
          question: textInputName,
          time: textInputTime,
          action: "added",
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log(response)
          alert("Added Successfully")
          document.location.reload(true)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  }
  const handleTimeChange = (event) => {
    setTimeInput(event.target.value);
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
          <Grid container>
            <Grid item xs={12} className="mainform">
              <Typography className="form">Question</Typography>
              <input onChange={handleNameChange} type="text" id="fname" name="fname" />
            </Grid>

            <Grid item xs={12} className="mainform">
              <Typography className="form">Time</Typography>
              <input onChange={handleTimeChange} type="number" id="time" name="fname" />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="success" onClick={handleClick} type="submit" className="form-btn">
                Add
              </Typography>
              <Typography variant="danger" onClick={() => {setisLoaded(false) ; handleClose()}} className="form-btn">Close</Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
