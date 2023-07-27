
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea'

export default function MenuCard(props){
    return (
        <Card >
          <CardActionArea onClick={props.onTap}>
            <CardMedia
              component="img"
              height="200"
              image={props.imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {props.title}
              </Typography>
              <Typography gutterBottom variant='body2' component={"div"}>
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    
}
