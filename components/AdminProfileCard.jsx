import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import style from "../styles/Admin.module.css"
import {updateInfo} from "../utils/profileRequest"

export default function AdminInfoCard(props) {
 
    const [id, setID] = useState();
    const [name, setName] = useState();
    const [status, setStatus] = useState();
    const [link, setLink] = useState();
    
    useEffect(() => {
        setID(props.id)
        setName(props.name)
        setStatus(props.status)
        setLink(props.pfp)
    }, [props])

    return <div className={style.profile}>
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            color="primary"
            multiline
            value={name}
            onChange={(e) => {setName(e.target.value) }}
        />
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-basic"
            label="Status"
            variant="outlined"
            color="primary"
            multiline
            value={status}
            onChange={(e) => { setStatus(e.target.value) }}
        />
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-textarea"
            label="Image Link"
            multiline
            value={link}
            onChange={(e)=> setLink(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
            <Button sx={{ marginLeft: "auto" }}
                onClick={() => {updateInfo(id,name,status,link)}}
                variant="contained"
                color="success"
                endIcon={<SendIcon />}>
                Update
            </Button>
        </Stack>
    </div >
}