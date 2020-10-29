import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import EditForm from './EditForm'

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

export default function EditModal(props) {
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

    var Itemname;
    var Description;

    return (
        <div>
            <Button size="small" onClick={handleOpen} color="primary">
                Edit
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
                    <div key={post.Postid} className={classes.paper}>
                        <EditForm post={post} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
