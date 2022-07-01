import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import parse from 'html-react-parser'
import { useRouter } from 'next/router';


export default function MediaCard(props) {
    const router = useRouter();
    return (
        <Card className="myCard" sx={{ maxWidth: "100%", borderRadius: "10px"}}>
            <CardMedia
                component="img"
                height="auto"
                image={props.img}
                alt="project image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" fontWeight={"bold"}>{props.title}
                </Typography>
                <Typography variant="body1">{parse(props.content)}
                </Typography>
            </CardContent>
            <CardActions>
                <Icon className={"socialMedia"} icon="akar-icons:github-fill" width="35" height="35" onClick={() => { router.push(props.link) }} cursor="pointer" />
                <Icon className={` socialMedia ${props.extlink === "" ? "cantSee" : null}`}  icon="fa-solid:globe" width="35" height="35" onClick={() => { router.push(props.extlink) }} cursor="pointer" />
            </CardActions>
        </Card>
    );
}