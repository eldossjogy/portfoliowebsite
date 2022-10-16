import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Head from "../components/Head"

export default function ProjectList(props) {
    return <div>
        <Head title='projects' description='A list of personal projects demonstrating my technical skills. '/>
        <Box sx={{ flexGrow: 1, mt: 1 }}>

            <Navbar page='projects'></Navbar>
            <Grid container spacing={1}>
                <Grid item xs={false} md={3}>
                </Grid>
                <Grid className="container" item xs={12} md={true}>
                    <Projects proj={props.projects} />
                    <Footer></Footer>
                </Grid>
                <Grid item xs={false} md={3}>
                </Grid>
            </Grid>

        </Box>
    </div>
}

export async function getStaticProps() {
    const req = await fetch("https://eldossjogy.vercel.app/api/project/get")
    const data = await req.json()
    return {
        props: { projects: data.project.reverse() },
        revalidate: 10,
    }
}