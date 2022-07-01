import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Projects from "../components/Projects"

export default function ProjectList(props) {
    return <Box sx={{ flexGrow: 1, mt: 1 }}>
        <Navbar page='projects'></Navbar>
        <Grid container spacing={1}>
            <Grid item xs={false} md={3}>
            </Grid>
            <Grid className="container" item xs={12} md={true}>
                <Projects proj={props.projects.project} />
                <Footer></Footer>
            </Grid>
            <Grid className="disapear" item xs={false} md={3}>
            </Grid>
        </Grid>

    </Box>
}

export async function getServerSideProps(){
    const req = await fetch("https://eldossjogy.vercel.app/api/project/get")
    const data = await req.json()
    return{
        props: {projects: data,}
    }
}