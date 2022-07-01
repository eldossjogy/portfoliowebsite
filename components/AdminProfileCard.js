import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import toast, { Toaster } from 'react-hot-toast';
import style from "../styles/Admin.module.css"
import { useRouter } from "next/router"
export default function AdminInfoCard(props) {
    const router = useRouter()
    const [name, setName] = useState(props.name);
    const [status, setStatus] = useState(props.status);
    const [link, setLink] = useState(props.pfp);

    function handleErrors(res) {
        if (!res.ok) { return res.text().then(text => { throw new Error(text) }) }
        else { return res.json(); }
    }

    function updateInfo() {
        let reqBody = {
            "id": props.id,
            "name": name,
            "status": status,
            "pfp": link
        }
        fetch("http://localhost:3000/api/profile/update", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody)
        }).then(handleErrors)
            .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
            .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
        router.push('/admin/edit');
    }

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
                onClick={updateInfo}
                variant="contained"
                color="success"
                endIcon={<SendIcon />}>
                Update
            </Button>
        </Stack>
    </div >
}