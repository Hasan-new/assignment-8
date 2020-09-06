import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        margin: '0 auto',
        marginBottom: '10px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
const Posts = (props) => {
    const { id, title, body } = props.posts;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <Card  className={classes.root}>
            <Link  to={"/PostDetail/" + id}>
                    <CardHeader 
                        avatar={
                            <Avatar alt="Remy Sharp" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t31.0-8/s960x960/26233454_10155965098087270_8633058778067702636_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_eui2=AeEgfteVeuXuMtXncj_oUgThpI84kmyP88ekjziSbI_zx4tJwqLzGZ9I_JlFpifOsrUSTvcl_WqzJLh6X3bu31fL&_nc_ohc=3bdBTSD-t0kAX-tuiGS&_nc_ht=scontent.fcgp7-1.fna&tp=7&oh=d00054fdcd2713278882cc41a4b9570e&oe=5F79D841"/>
                        }
                        
                        title="Hasan's first work"
                        subheader="September 09, 2020"
                    />
                    <CardMedia
                        className={classes.media}
                        image={"https://picsum.photos/200/300?random="+id}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {title}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>details:</Typography>
                        <Typography paragraph>
                            {body}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </div>
    );
};

export default Posts;