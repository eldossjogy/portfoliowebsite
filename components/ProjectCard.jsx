import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import parse from 'html-react-parser'

export default function MediaCard(props) {
    return (
        <Card className="myCard">
            <CardMedia
                component="img"
                height="150px"
                image={props.img}
                alt="project image"
            />

            <CardContent className='cardBody'>
                <Typography className="cardContent" variant="h5" component="div" fontWeight={"bold"}>{props.title}
                </Typography>
                <Typography variant="body1">{parse(props.content)}
                </Typography>
            </CardContent>
            <CardActions className='linkCards'>
                <a className={"links"} href={props.link} target="_blank" rel="noopener noreferrer">
                    <Icon className={"socialMedia"} icon="akar-icons:github-fill" width="35" height="35" cursor="pointer" />
                </a>
                {props.extlink != "" ?
                    <a href={props.extlink} className={"links"} target="_blank" rel="noopener noreferrer">
                        <Icon className={"socialMedia"} icon="fa-solid:globe" width="35" height="35" cursor="pointer" />
                    </a>
                    : null}
            </CardActions>

        </Card>
    );
}