import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MyAvatar from "../components/MyAvatar";
import { Typography } from "@mui/material";
import Description from "../components/homeDescription"
import { useState } from "react";
import Head from "../components/Head";

export default function LayOut(props) {
  const [Music, setMusic] = useState({ "track": "loading...", "artist": "" })

  function updateMusic() {
    fetch('./api/profile/music')
      .then(response => response.text())
      .then(data => setMusic(JSON.parse(data)))
  }
  useEffect(() => {
    updateMusic()
    const interval = setInterval(() => {
      updateMusic()
    }, 60000)


    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Head title='homepage' description='The portfolio website for Eldoss Jogy.' />
      <Box sx={{ flexGrow: 1, mt: 1 }}>
        <Navbar />
        <Grid container spacing={1}>
          <Grid item xs={1} sm={1} md={3} lg={3.4} xl={4.4}>
          </Grid>
          <Grid item xs={10} sm={true} md={true}>
            <Grid container>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MyAvatar info={Music} img={props.profile.pfp} />

              </Grid>
              <Grid item xs={12} sm={8} md={6} lg={8} xl={8}>
                <div className="homeName">
                  <Typography variant="h5">
                    {props.profile.name}
                  </Typography>
                  <Typography variant="h5">
                    {props.profile.status}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            {props.infos.map((info) => {
              return <Description key={info._id} title={info.title} content={info.content} />
            })}
            <Footer></Footer>
          </Grid>
          <Grid item xs={1} sm={1} md={3} lg={3.4} xl={4.4}>
          </Grid>
        </Grid>
      </Box >
    </div>
  )
}

export async function getStaticProps() {
  const req = await fetch("https://eldossjogy.vercel.app/api/info/get")
  const data = await req.json()
  const profileReq = await fetch("https://eldossjogy.vercel.app/api/profile/get")
  const profileData = await profileReq.json()
  return {
    props: { infos: data.info, profile: profileData.info[0] },
    revalidate: 10,
  }
}