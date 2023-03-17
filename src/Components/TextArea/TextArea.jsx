import React from "react";
import TextField from "@mui/material/TextField";

export default function TextArea(props) {
  return (
    <div className="text-area">
      <TextField
        id="outlined-basic"
        label={props.msg}
        variant="outlined"
        size="small"
        sx={props.width}
      />
    </div>
  );
}
