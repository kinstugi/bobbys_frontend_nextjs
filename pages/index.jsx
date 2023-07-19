import CustomAppBar from '@/components/custom_appbar'
import Jumbotron from '@/components/jumbotron'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BodyFit from '@/components/body_fit';
import Typography from '@mui/material/Typography'
import StickyFooter from '@/components/footer';
import Avatar from '@mui/material/Avatar'
import Link from 'next/link'
import dummyData from '../data/dummy_data'

function BenefitCards(props){
    return (
        <Card>
            <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={props.benefit.imageurl}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.benefit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.benefit.description}
                </Typography>
            </CardContent>
        
        </Card>
    )
}

function SpecialThanks(props){
    const theme = useTheme();
    return (
        <>
          <Typography variant='h4' textAlign={"center"}>Special Thanks to </Typography>
          <Grid container justifyContent={"center"} alignItems={"center"} pb={3} pt={1} spacing={1}>
            <Grid item xs={12} md={2} justifyContent={"center"}>
                <Avatar alt="Mustafa's image"  src="https://shorturl.at/EJW78" sx={{width: 200, height: 200}}/>
            </Grid>
            <Grid item xs={12} md={6}>
               <Typography variant='body1'> We humbly offer our special thanks to Dr Mostafa Saad Ibrahim, without whom this web application would not have been possible. We strongly recommend you try his Udemy courses, especially those on Algorithms and Coding Interviews.</Typography>
            </Grid>
          </Grid>
        </>
    );
}

export default function Home(){
    return (
        <>
            <CustomAppBar/>
            <Jumbotron 
                title="Welcome to Coding Cards Sharp" 
                description="Helping you ace your technical interview"
            >
                <Button variant="contained" component={Link} href="/solve-question">Try a quiz</Button>
            </Jumbotron>

            <BodyFit>
                <Typography variant='h4' textAlign={"center"} mt={5}>Why Coding Cards Sharp</Typography>
                <Grid container spacing={3} pt={2} pb={2}>
                    {dummyData.benefits.map(e => <Grid item xs={12} md={6}>
                        <BenefitCards benefit={e}/>
                    </Grid>)}
                </Grid>
            </BodyFit>
            <SpecialThanks />
            <StickyFooter/>
        </>
    )
}