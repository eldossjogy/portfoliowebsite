import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import style from "../styles/Admin.module.css"
import { updateInfo, deleteInfo } from "../utils/infoRequest"

export default function AdminInfoCard(props) {
    const [infoTitle, setInfoTitle] = useState(props.title);
    const [infoContent, setInfoContent] = useState(props.content);

    return <div className={style.card}>
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            color="primary"
            multiline
            value={infoTitle}
            onChange={(e) => { setInfoTitle(e.target.value) }}
        />
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-textarea"
            label="Content"
            multiline
            value={infoContent}
            onChange={(e) => setInfoContent(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
            <Button sx={{ marginRight: "auto" }}
                onClick={() => { deleteInfo(props.id,props.setInfo) }}
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button sx={{ marginLeft: "auto" }}
                onClick={() => { updateInfo(props.id, infoTitle, infoContent,props.setInfo) }}
                variant="contained"
                color="success"
                endIcon={<SendIcon />}>
                Update
            </Button>
        </Stack>
    </div >
}