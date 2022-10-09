import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { useRouter } from "next/router";
import toast from 'react-hot-toast';
import { addProject } from "../utils/projectRequest"
import { addInfo } from "../utils/infoRequest"

export default function AddButton(props) {
    // const router = useRouter()
    const [infoOpen, setInfoOpen] = useState(false);
    const [projOpen, setProjOpen] = useState(false);
    const [infoTitle, setInfoTitle] = useState("");
    const [infoContent, setInfoContent] = useState("");
    const [projTitle, setProjTitle] = useState("");
    const [projContent, setProjContent] = useState("");
    const [projImgLink, setProjImgLink] = useState("");
    const [projSrcLink, setProjSrcLink] = useState("");
    const [projExtLink, setProjExtLink] = useState("");

    function openDialog() {
        if (props.id === 'info') { setInfoOpen(true); }
        else { setProjOpen(true); }
    }

    function handleDialogClose(event) {
        if (event.target.id === 'info') {
            setInfoTitle("");
            setInfoContent("");
            setInfoOpen(false);
        }
        else {
            setProjTitle("");
            setProjContent("");
            setProjImgLink("");
            setProjSrcLink("");
            setProjExtLink("");
            setProjOpen(false);
        }
    };

    function handleDialogSubmit(e) {
        if (e.target.id === 'info') {
            if (!infoTitle && !infoContent) {
                toast("Empty Form", { type: "error", duration: 2000 })
            }
            else if (!infoTitle) {
                toast("Missing Title Section", { type: "error", duration: 2000 })
            }
            else if (!infoContent) {
                toast("Missing Content Section", { type: "error", duration: 2000 })
            }
            else {
                addInfo(infoTitle, infoContent, props.setFun,setInfoOpen)
            }
        } else {
            if (!projTitle && !projContent && !projImgLink && !projSrcLink && !projExtLink) {
                toast("Empty Form", { type: "error", duration: 2000 })
            }
            else if (!projTitle) {
                toast("Missing Title Section", { type: "error", duration: 2000 })
            }
            else if (!projContent) {
                toast("Missing Content Section", { type: "error", duration: 2000 })
            }
            else if (!projImgLink) {
                toast("Missing Image Section", { type: "error", duration: 2000 })
            }
            else {
                addProject(projTitle, projContent, projImgLink, projSrcLink, projExtLink, props.setFun,setProjOpen)
            }
        }
        // setInfoTitle("");
        // setInfoContent("");
        // setProjTitle("");
        // setProjContent("");
        // setProjImgLink("");
        // setProjSrcLink("");
        // setProjExtLink("");
        // router.push("/admin/edit")
    }

    return <div sx={{ display: "inline" }}>
        <Button onClick={openDialog} className="btn-add" variant="contained" color="secondary" startIcon={<AddIcon sx={{ marginLeft: "25%" }} />}>
        </Button>
        <Dialog open={infoOpen} onClose={handleDialogClose} >
            <DialogTitle>New Information Section</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This content will show on the homepage of the portfolio website.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    fullWidth
                    variant="standard"
                    multiline
                    value={infoTitle}
                    onChange={(e) => setInfoTitle(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="content"
                    label="Content"
                    fullWidth
                    variant="standard"
                    multiline
                    value={infoContent}
                    onChange={(e) => setInfoContent(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} id="info">Cancel</Button>
                <Button onClick={handleDialogSubmit} id="info" >Add</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={projOpen} onClose={handleDialogClose}>
            <DialogTitle>New Project Section</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This content will show on the projects page of the portfolio website.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    fullWidth
                    variant="standard"
                    multiline
                    value={projTitle}
                    onChange={(e) => setProjTitle(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Content"
                    fullWidth
                    variant="standard"
                    multiline
                    value={projContent}
                    onChange={(e) => setProjContent(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Image Link"
                    fullWidth
                    variant="standard"
                    multiline
                    value={projImgLink}
                    onChange={(e) => setProjImgLink(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Source Link"
                    fullWidth
                    variant="standard"
                    multiline
                    value={projSrcLink}
                    onChange={(e) => setProjSrcLink(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Extra Link"
                    fullWidth
                    variant="standard"
                    multiline
                    value={projExtLink}
                    onChange={(e) => setProjExtLink(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} id="proj">Cancel</Button>
                <Button onClick={handleDialogSubmit} id="proj">Add</Button>
            </DialogActions>
        </Dialog>
        {/* <Toaster /> */}
    </div>
}