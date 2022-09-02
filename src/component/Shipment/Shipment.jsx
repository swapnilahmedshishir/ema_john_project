import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { UserContexApi } from "../../App";
import { Button } from "react-bootstrap";

const Shipment = () => {
  const dstyle = {
    marginLeft: "10px",
  };
  const [userLoginInfo, setUserLoginInfo] = useContext(UserContexApi);
  return (
    <div style={dstyle}>
      <Box>
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
        />
        <TextField
          helperText=" Please Enter Your Email"
          id="demo-helper-text-aligned-no-helper"
          label="Email"
        />
        <TextField
          helperText=" Please Enter Your Adress"
          id="demo-helper-text-aligned-no-helper"
          label="Adress"
        />
        <TextField
          helperText=" Please Enter Your Number"
          id="demo-helper-text-aligned-no-helper"
          label="Phone Number"
        />
        <TextField
          helperText=" Please Enter Your Zip Code"
          id="demo-helper-text-aligned-no-helper"
          label="Zip Code"
        />
      </Box>
      <br />
      <Button>Submit </Button>
    </div>
  );
};

export default Shipment;
