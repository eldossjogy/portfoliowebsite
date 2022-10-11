import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Contacts from "../components/Contact"
export default function Contact() {
  const [time, setTime] = useState(Date.now());
  const [Music, setMusic] = useState({"track": "loading...", "artist" :""})

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

  return <Box sx={{ flexGrow: 1, mt: 1 }}>
    <Navbar page="contact"></Navbar>
    <Grid container spacing={1}>
      <Grid item xs={false} md={4}>
      </Grid>
      <Grid className="container" item xs={12} md={4}>
        <Contacts info={Music}></Contacts>
      </Grid>
      <Grid item xs={false} md={4}>
      </Grid>
    </Grid>

  </Box>
}