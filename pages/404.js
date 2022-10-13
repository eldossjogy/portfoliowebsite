import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from "next/router";
export default function SignIn() {
  const router = useRouter()
  return <Box sx={{ flexGrow: 1, mt: 1 }}>
    <Grid container spacing={1}>
      <Grid item xs={1} sm={1} md={3} lg={3.4} xl={4.4}>
      </Grid>
      <Grid item xs={10} sm={true} md={true} sx={{ textAlign: "center" }}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h5">{"The page you're looking for couldn't be found."}</Typography>
        <Typography variant="h5" >Lets go back home</Typography>
        <br />
        <IconButton aria-label="delete" onClick={() => { router.push("/") }}>
          <HomeIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={1} sm={1} md={3} lg={3.4} xl={4.4}>
      </Grid>
    </Grid>
  </Box >
}
