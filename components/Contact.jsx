import React from "react";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { Icon } from '@iconify/react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router";

function Contact(props) {
    const router = useRouter();
    function discordID() {
        navigator.clipboard.writeText("Beta#9931")
        toast.success("Copied to clipboard!")
    }

    return <div>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <Tooltip title={props.info.track != "loading..." ? `🎧 Listening to ${props.info.track} by ${props.info.artist}` : ""} arrow>
            <Avatar
                alt="Eldoss Jogy"
                src="https://avatars.githubusercontent.com/u/77898541?v=4"
                sx={{ width: 120, height: 120, border: "solid 4px ", margin: "auto" }}
            />
        </Tooltip>
        <div className="contactInfo">
            <Typography variant="h5">
                Eldoss Jogy
            </Typography>
            <Typography variant="h6">
                trying to solve problems.
            </Typography>
            <div className="socialTray">
                <a className={"links"} href="https://open.spotify.com/user/unknowkid123" target="_blank" rel="noopener noreferrer">
                    <Icon className={"socialMedia"} icon="mdi:spotify" width="35" height="35" cursor="pointer" />
                </a>
                <a className={"links"} href="https://www.last.fm/user/Betamxnster" target="_blank" rel="noopener noreferrer">

                    <Icon className={"socialMedia"} icon="brandico:lastfm" width="35" height="35" cursor="pointer" />
                </a>
                <Tooltip title="Beta#9931" arrow>
                    <a onClick={discordID}>
                        <Icon className={"socialMedia"} icon="simple-icons:discord" width="35" height="35" />
                    </a>
                </Tooltip>
                <a className={"links"} href="https://github.com/eldossjogy" target="_blank" rel="noopener noreferrer">

                    <Icon className={"socialMedia"} icon="akar-icons:github-fill" width="35" height="35" cursor="pointer" />
                </a>
                <a className={"links"} href="https://www.instagram.com/eldossjogy/" target="_blank" rel="noopener noreferrer">
                    <Icon className={"socialMedia"} icon="akar-icons:instagram" width="35" height="35" cursor="pointer" />
                </a>
                <a className={"links"} href="https://www.linkedin.com/in/eldossjogy/" target="_blank" rel="noopener noreferrer">
                    <Icon className={"socialMedia"} icon="akar-icons:linkedin-box-fill" width="35" height="35"  cursor="pointer" />
                </a>
                <a className={"links"} href="mailto:eldossjogy@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Icon className={"socialMedia"} icon="carbon:email" width="38" height="38" cursor="pointer" />
                </a>
            </div>
        </div>
    </div>
}

export default Contact