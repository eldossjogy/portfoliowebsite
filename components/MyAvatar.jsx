import React from "react";
import { Avatar, Tooltip } from "@mui/material";

function MyAvatar(props) {
  return (
    <Tooltip title={`🎧 Listening to ${props.info.track} by ${props.info.artist}`} arrow>
      <Avatar
        alt="Eldoss Jogy"
        src={props.img}
        sx={{ width: 120, height: 120, border: "solid 3px", display: { xs: 'flex', md: 'flex' } }}
      />
      </Tooltip> 
      )
}

export default MyAvatar