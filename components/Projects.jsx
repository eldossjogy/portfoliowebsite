import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import ProjectCard from "../components/ProjectCard"
import { Grid } from "@mui/material";

export default function Projects(props) {
    return <div>
        <Typography variant="h3" sx={{ textAlign: "center", marginBottom: "30px" }}>
            Projects
        </Typography>
        <Grid container spacing={{ xs: 2, md: 2 }}>
            {props.proj.map((project, index) => {
                return <Fragment key={index}>
                    <Grid item xs={1} sm={0.5} className="gridSpace"></Grid>
                    <Grid item xs={10} sm={11} md={6} tablet={4}>
                        <ProjectCard title={project.title} content={project.content} link={project.link} img={project.img} extlink={project.extlink} />
                    </Grid>
                    <Grid item xs={1} sm={0.5} className="gridSpace"></Grid>
                </Fragment>
            })}

        </Grid>
    </div>
}
