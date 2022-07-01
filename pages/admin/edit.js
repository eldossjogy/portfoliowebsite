import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import AddButton from "../../components/AddButton";
import AdminInfoCard from "../../components/AdminInfoCard";
import AdminProjectCard from "../../components/AdminProjectCard"
import Navbar from '../../components/Navbar'
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import Profile from "../../components/AdminProfileCard"
import Footer from "../../components/Footer";

export default function Page(props) {
    const homeInfos = props.homeInfo.info
    const projectInfos = props.projectInfo.project
    const router = useRouter()
    const { data: session, status } = useSession()
    console.log(session, status)

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push({ pathname: "/admin" })
        }
    });
    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return (
            <>
                <p>NO ACCESS</p>
            </>
        )
    }
    else {
        return (
            <>
                <Navbar page='admin' />
                <Grid container spacing={1}>
                    <Grid item xs={false} md={2}>
                    </Grid>
                    <Grid className="container" item xs={12} md={true}>
                        <Typography sx={{ textAlign: "center" }} variant="h4">
                            Admin Page
                        </Typography>
                        <Typography variant="h5">
                            Profile Info
                        </Typography>
                        <Profile key={props.profileInfo.info[0]._id} id={props.profileInfo.info[0]._id} name={props.profileInfo.info[0].name} status={props.profileInfo.info[0].status} pfp={props.profileInfo.info[0].pfp} />
                        <Typography variant="h5">
                            Homepage Info
                            <AddButton id="info"></AddButton>
                        </Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 6, tablet: 6, lg: 8, xl: 12 }}>
                            {homeInfos.map((info) => {
                                return <Grid item xs={2} sm={4} md={3} key={info._id}> <AdminInfoCard key={info._id} id={info._id} title={info.title} content={info.content} /> </Grid>
                            })}
                        </Grid>
                        <Typography variant="h5" sx={{ marginTop: "5%" }}>
                            Project Info
                            <AddButton id="project"></AddButton>
                        </Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 6, tablet: 6, lg: 8, xl: 12 }}>
                            {projectInfos.map((info) => {
                                return <Grid item xs={2} sm={4} md={3} key={info._id}> <AdminProjectCard key={info._id} id={info._id} title={info.title} content={info.content} img={info.img} link={info.link} ext={info.extlink} /> </Grid>
                            })}
                        </Grid>
                    </Grid>
                    <Grid className="disapear" item xs={false} md={2}>
                    </Grid>
                </Grid>
                <Toaster />
                <Footer></Footer>
            </>
        )
    }
}

export const getServerSideProps = async () => {
    var res = await fetch("http://localhost:3000/api/info/get")
    const homeInfo = await res.json()
    res = await fetch("http://localhost:3000/api/project/get")
    const projectInfo = await res.json()
    res = await fetch("http://localhost:3000/api/profile/get")
    const profileInfo = await res.json()
    return {
        props: {
            homeInfo,
            projectInfo,
            profileInfo
        },
    }
}