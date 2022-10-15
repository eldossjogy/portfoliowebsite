import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Head from "next/head";

export default function ProjectList(props) {
    let title = ""
    const imgURL = `/api/og?title=${title}`
    return <div>
        <Head>
            <meta charset="utf-8"/>
            <title>Project</title>
            <link rel="icon" type="image/x-png" href="./icon.png"></link>
            <meta property="og:title" content="Hi, I'm Eldoss Jogy." />
            <meta property="og:description" content="Eldoss Jogy's Portfolio Website" />
            <meta property="og:url" content="https://eldossjogy.vercel.app/" />
            <meta name="viewport" content="width=device-width"/>
            <meta name="description" content="Im Eldoss Jogy and this is my personal  website"/>
            <meta name="twitter:image:src" content={imgURL}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:image" content={imgURL}/>
            <meta property="og:image:alt" content="Im Eldoss Jogy and this is my personal website"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="600"/>
            <meta property="og:site_name" content="eldossjogy"/>
            <meta property="og:type" content="object"/>
            <meta name="theme-color" content="#2b2d42" />
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