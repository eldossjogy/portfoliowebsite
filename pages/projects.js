import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Head from "next/head";

export default function ProjectList(props) {
    const imgURL = "http://localhost:3000/api/og?title=${title}"
    return <div>
        <Head>
            <title>Project</title>
            <link rel="icon" type="image/x-png" href="./icon.png"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="Hi, I'm Eldoss Jogy." />
            <meta property="og:description" content="Eldoss Jogy's Portfolio Website" />
            <meta property="og:url" content="https://eldossjogy.vercel.app/" />
            <meta property="og:image" content={imgURL} />
        </Head>

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