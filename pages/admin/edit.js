import {  Grid, Typography } from "@mui/material";
import React, { useState } from "react";
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
import { useAppContext } from '../../context/adminContext';

export default function Page(props) {
    const fetchInfo  = useAppContext()
    const router = useRouter()
    const {  status } = useSession()

    const [profileInfo, setProfileInfo] = useState([])
    const [bioInfo, setBioInfo] =  useState([])
    const [projectInfo, setProjectInfo] =  useState([])
    
    useEffect(() => {
        if (fetchInfo.profile.info?.length > 0 && fetchInfo.profile.info[0]?._id )
        {
            setProfileInfo(fetchInfo.profile.info[0])
        }
        setBioInfo(fetchInfo.info.info)
        setProjectInfo(fetchInfo.project.project)
    },[fetchInfo])


    useEffect(() => {
        if (status === "unauthenticated") {
            router.push({ pathname: "/admin" })
        }
    });

    // useEffect( () => { console.log(projectInfo);}, [projectInfo] )
    // console.log(profileInfo)
    // console.log(profileInfo?._id)
    // console.log(bioInfo)
    // console.log(projectInfo)

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
                        <Profile key={profileInfo?._id} id={profileInfo?._id} name={profileInfo?.name} status={profileInfo?.status} pfp={profileInfo?.pfp} setInfo={setProfileInfo}/>
                        <Typography variant="h5">
                            Homepage Info
                            <AddButton id="info" setFun={setBioInfo}></AddButton>
                        </Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 6, tablet: 6, lg: 8, xl: 12 }}>
                            {bioInfo?.map((info) => {
                                return <Grid item xs={2} sm={4} md={3} key={info._id}> <AdminInfoCard key={info._id} id={info._id} title={info.title} content={info.content} setInfo={setBioInfo}/> </Grid>
                            })}
                        </Grid>
                        <Typography variant="h5" sx={{ marginTop: "5%" }}>
                            Project Info
                            <AddButton id="project" setFun={setProjectInfo}></AddButton>
                        </Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 6, tablet: 6, lg: 8, xl: 12 }}>
                            {projectInfo?.map((info) => {
                                return <Grid item xs={2} sm={4} md={3} key={info._id}> <AdminProjectCard key={info._id} id={info._id} title={info.title} content={info.content} img={info.img} link={info.link} ext={info.extlink} setInfo={setProjectInfo}/> </Grid>
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

 