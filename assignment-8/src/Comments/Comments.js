import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Comments = () => {
    const [Comments, setComments] = useState([]);
    const { id } = useParams()
    const { name, body } = Comments;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data);
                console.log(data);
                const name = data.map(Comments => Comments.name)
            })

    }, [])
    const classes = useStyles();

    return (
        <div style={{textAlign:"center"}}>
            <h1 >Comments:{Comments.length}</h1>
                {
                    Comments.map(Comments => <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.0-9/p720x720/70693551_2790149164370049_3927684237129416704_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_eui2=AeFhzpBnzvkP3trT3-a4KMW2NW67-7Qt3AE1brv7tC3cAZejwpLuawyimAqphEOkvvtGyeMEg0_uX1-FhAn5k0Ot&_nc_ohc=8AmKWTyNqroAX-FmWQI&_nc_ht=scontent.fcgp7-1.fna&tp=6&oh=f4ba5ff522b63eb491f99c3958fa0b42&oe=5F7AC36B"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               {Comments.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>)
                }

                
 
        </div>
    );
};

export default Comments;