import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MyAvatar from "../components/MyAvatar";
import { Typography } from "@mui/material";
import Description from "../components/homeDescription"

export default function LayOut(props) {
  return <Box sx={{ flexGrow: 1, mt: 1 }}>
    <Navbar />
    <Grid container spacing={1}>
      <Grid item xs={1} sm={1} md={3} lg={3.4} xl={4.4}>
      </Grid>
      <Grid item xs={10} sm={true} md={true}>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <MyAvatar info={props.music} img={props.profile.pfp} />

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
}

export async function getServerSideProps() {
  function CurrentListening(body, startSearch, endSearch) {
    for (let index = 0; index < 2; index++) {
      body = body.replace(startSearch, "")
      body = body.replace(endSearch, "")
    }
    let startPos = body.search(startSearch);
    let endPos = body.search(endSearch);
    let result = body.substring((startPos + startSearch.length), endPos);
    result = result.trim()
    return result.substring(1, result.length - 1)
  }


  async function getWordsAndDoStuff() {
    let Music = {}
    const response = await fetch('https://www.last.fm/user/Betamxnster');
    const data = await response.text();
    let track = CurrentListening(data, "data-track-name=", "data-track-url")
    let artist = CurrentListening(data, "data-artist-name=", "data-artist-url=")
    track = track.replace("&#39;","'").replace("&amp;","&").replace("&#34;",`"`).replace("&#34;",`"`)
    artist = artist.replace("&#39;","'").replace("&amp;","&").replace("&#34;",`"`).replace("&#34;",`"`)
    Music.track = decodeURIComponent(track);
    Music.artist = decodeURIComponent(artist);
    return Music
  }

  const req = await fetch("http://localhost:3000/api/info/get")
  const data = await req.json()
  const profileReq = await fetch("http://localhost:3000/api/profile/get")
  const profileData = await profileReq.json()
  const musicInfo = await getWordsAndDoStuff()
  return {
    props: { infos: data.info, music: musicInfo, profile: profileData.info[0] }
  }
}