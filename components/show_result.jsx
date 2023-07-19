import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper'
import Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CorrectOrWrong(props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    let bgColor = props.isCorrect ? "green" : "red"
    return (
        <>
            <Grid container p={1}>
                <Grid item xs="2">
                    <Button onClick={props.toggleCode}>Show Code</Button>
                </Grid>
                <Grid item xs="8">
                    <Paper elevation={0} sx={{padding: 1, color: "white", backgroundColor: bgColor, textAlign: "center"}}>
                        <Typography>
                            {props.isCorrect ? "Correct" : "Wrong"}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs="2" variant="outlined">
                    <Button onClick={handleOpen}>Why?</Button>
                </Grid>
            </Grid>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Explanation
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {props.reason}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}