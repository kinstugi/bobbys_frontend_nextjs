import CustomAppbar from '@/components/custom_appbar'
import Grid from '@mui/material/Grid'
import dummy_data from '../data/dummy_data';
import MenuCard from '@/components/display_card'
import { useRouter } from 'next/router';

export default function Dashboard(){
    const router = useRouter()
    const modes = dummy_data.modes.map(e => (
        <Grid item md={2} xs={12}>
            <MenuCard title={e.title} imageUrl={e.imageUrl} onTap={()=> router.push({pathname: '/select_pack', query:{mode: e.mode}})}/>
        </Grid>
    ));

    return (
        <>
            <CustomAppbar />
            <Grid container gap={2} justifyContent={"center"} py={3}>
                {modes}
                <Grid item md={2} xs={12}>
                    <MenuCard title={"View Stats"} imageUrl={"https://tinyurl.com/2s36mhkc"} onTap={()=> router.push('/stats')}/>
                </Grid>

                <Grid item md={2} xs={12}>
                    <MenuCard title={"Options"} imageUrl={"https://play-lh.googleusercontent.com/bvQSeDd_NdOuwjPdp1tdiM4ygaTISGbc1dIZ7AhRZStHUkislXefUh5_9jjcws_NYA=w526-h296-rw"}/>
                </Grid>
            </Grid>
        </>
    )
}