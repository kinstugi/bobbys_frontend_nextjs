import Grid from '@mui/material/Grid'
export default function BodyFit(props){
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={9}>
                {props.children}
            </Grid>
        </Grid>
    );
}