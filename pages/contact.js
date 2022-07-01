import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Contacts from "../components/Contact"
export default function Contact(props) {
    return <Box sx={{ flexGrow: 1, mt: 1 }}>
        <Navbar page="contact"></Navbar>
        <Grid container spacing={1}>
            <Grid item xs={false} md={4}>
            </Grid>
            <Grid className="container" item xs={12} md={4}>
                <Contacts info={props.music}></Contacts>
            </Grid>
            <Grid className="disapear" item xs={false} md={4}>
            </Grid>
        </Grid>

    </Box>
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
      Music.track = decodeURI(track);
      Music.artist = decodeURI(artist);
      return Music
    }
  
    const musicInfo = await getWordsAndDoStuff()
    return {
      props: { music: musicInfo }
    }
  }