import { useRouter } from 'next/router';
import CustomAppbar from '@/components/custom_appbar'
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MenuCard from '@/components/display_card'

function valuetext(value) {
    return `${value}°C`;
}
  
export default function SelectPackAndCountPage(){
    const router = useRouter();
    const mode = router?.query.mode;
    let questionCount = 5;
    return (
        <>
            <CustomAppbar />
            <Grid container p={3} gap={2}>
                <Grid item xs={12}>
                    <Box sx={{ width: 300 }}>
                        <Typography variant='h6'> Select the number question</Typography>
                        <Slider
                            aria-label="Question Count"
                            defaultValue={5}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={5}
                            marks
                            min={5}
                            max={20}
                            onChange={(e, val)=> questionCount = val}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6'>Chose Pack</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <MenuCard 
                        title="Interview Pack" 
                        imageUrl="https://tinyurl.com/4ak57psa" 
                        onTap={()=> router.push({pathname: '/solve-question', query:{mode: mode, pack: 1, count: questionCount}}) }
                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <MenuCard 
                        title="Algorithms Pack" 
                        imageUrl="https://tinyurl.com/4pjjk6fm" 
                        onTap={()=> router.push({pathname: '/solve-question', query:{mode: mode, pack: 2, count: questionCount}}) }
                    />
                </Grid>
            </Grid>
        </>
    );
}