import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import './CardModal.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function CardModal(props) {
    const { post } = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    //To Xiao Wei and Wei Rong. At chrome console terminal, see the format for {post.blabla}
    //To display the data
    //console.log(post)
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button size="small" onClick={handleOpen} color="primary">
                View More
        </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <img src={"data:image/jpeg;base64," + post.ImageId } alt=""/>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6} direction="column">
                                            <Typography gutterBottom variant="subtitle1">
                                                <h2 id="transition-modal-title">{post.ItemName}</h2>
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                <p id="transition-modal-description">
                                                    Description: {post.Description} 
                                                    <br></br>
                                                    Posted by: {post.Username}
                                                </p>
                                            </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Fade>
            </Modal>
        </div>
    );
}
