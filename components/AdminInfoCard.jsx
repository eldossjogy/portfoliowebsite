import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import toast, { Toaster } from 'react-hot-toast';
import style from "../styles/Admin.module.css"
import { useRouter } from "next/router"
export default function AdminInfoCard(props) {
    const router = useRouter()
    const [infoTitle, setInfoTitle] = useState(props.title);
    const [infoContent, setInfoContent] = useState(props.content);

    function handleErrors(res) {
        if (!res.ok) { return res.text().then(text => { throw new Error(text) }) }
        else { return res.json(); }
    }

    function updateInfo() {
        let reqBody = {
            "id": props.id,
            "title": infoTitle,
            "content": infoContent
        }
        fetch("http://localhost:3000/api/info/update", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody)
        }).then(handleErrors)
            .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
            .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
    }

    function deleteInfo() {
        let reqBody = {
            "id": props.id
        }
        fetch("http://localhost:3000/api/info/remove", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody)
        }).then(handleErrors)
            .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
            .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
            router.push("/admin/edit")
    }

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
                onClick={deleteInfo}
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button sx={{ marginLeft: "auto" }}
                onClick={updateInfo}
                variant="contained"
                color="success"
                endIcon={<SendIcon />}>
                Update
            </Button>
        </Stack>
        {/* <Toaster /> */}
    </div >
}