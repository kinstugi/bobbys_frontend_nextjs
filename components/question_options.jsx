import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import miscmethods from '../utils/misc_methods'
import Button  from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useState } from 'react'
import CorrectOrWrong from './show_result'


export default function QuestionOptions(props){
    const [result, setResult] = useState()

    const handleSelectedOption = (index) => {
        setResult({isCorrect: index.isCorrect, reason: index.message})
    }

    let showRes = (<></>)
    if (result !== undefined){
        showRes = <CorrectOrWrong 
            toggleCode={props.toggleCode} 
            isCorrect={result.isCorrect} 
            reason={result.reason}
        />
    }

    const options = miscmethods.shuffleArray(props.choices).map(

        (item, i) => (
            <Grid item xs={12} key={item.optionId}>
                <Button size='large' variant='outlined' onClick={()=>handleSelectedOption(item)}>{item.text}</Button>
            </Grid>
        )
    )
    return (
        <>
            <Stack direction={"column"} justifyContent={"space-between"} sx={{minHeight: '90vh'}}>
                <Box>
                    <Typography variant='h5' textAlign={"center"}>
                        Question {1} of {5}
                    </Typography>
                    {showRes}

                    <Typography variant='body1' p={2}>
                        {props.problem}
                    </Typography>

                    <Grid container spacing={2} justifyContent={"center"} px={2}>
                        {options}
                    </Grid>
                </Box>
                
                <Grid container justifyContent={"end"}>
                    <Grid item px={2}>
                        <Button >Next Question</Button>
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}