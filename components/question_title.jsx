import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LinkIcon from '@mui/icons-material/Link'
import Link from '@mui/material/Link'

export default function(props){
    return (
        <>
            <Grid container px={2}>
                <Grid item flex={9}>
                    <Typography variant='h6'>{props.title}</Typography>
                </Grid>
                <IconButton component={Link} href={props.videoUrl} target="_blank">
                    <LinkIcon />
                </IconButton>
            </Grid>
        </>
    );
}