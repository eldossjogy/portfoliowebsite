import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import style from "../styles/Admin.module.css"
import { updateProject,deleteProject} from "../utils/projectRequest"

export default function AdminInfoCard(props) {
    const [projectTitle, setProjectTitle] = useState(props.title);
    const [projectContent, setProjectContent] = useState(props.content);
    const [projectImg, setProjectImg] = useState(props.img);
    const [projectSrc, setProjectSrc] = useState(props.link);
    const [projectExt, setProjectExt] = useState(props.ext);

    return <div className={style.card}>
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            color="primary"
            id="outlined-textarea"
            label="Image Link"
            multiline
            value={projectImg}
            onChange={(e) => setProjectImg(e.target.value)}
        />
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            multiline
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
        />
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-textarea"
            label="Content"
            multiline
            value={projectContent}
            onChange={(e) => setProjectContent(e.target.value)}
        />
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-textarea"
            label="Source Link"
            multiline
            value={projectSrc}
            onChange={(e) => setProjectSrc(e.target.value)}
        />
        <TextField sx={{ marginBottom: "20px", width: "100%" }}
            id="outlined-textarea"
            label="Extra Link"
            multiline
            value={projectExt}
            onChange={(e) => setProjectExt(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
            <Button sx={{ marginRight: "auto" }}
                onClick={() => {deleteProject(props.id, props.setInfo)}}
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button sx={{ marginLeft: "auto" }}
                onClick={() => { updateProject(props.id,projectTitle,projectContent,projectImg,projectSrc,projectExt, props.setInfo)}}
                variant="contained"
                color="success"
                endIcon={<SendIcon />}>
                Update
            </Button>
        </Stack>
    </div >
}