import SplitPane, { Pane } from 'react-split-pane';
import BasicTabs from './display_solution';
import dummyData from '../data/dummy_data'
import QuestionOptions from './question_options';
import QuestionTitle from './question_title'
import { Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {useState} from 'react'


function ProblemStatement(props){
    return (
        <>
            <Typography variant='body1' p={2}>
                {props.problemStatement}
            </Typography>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Show Hint</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {props.questionHint}
                </Typography>
                </AccordionDetails>
            </Accordion>

        </>
    );
}

export default function QuestionDisplayCard(props){
    const [showCodes, setShowCodes] = useState(false);
    const toggleCodeVisibility = () => {
        setShowCodes(!showCodes);
    }

    let questionOrCodes = (<ProblemStatement problemStatement={props.question.problemStatement} questionHint={props.question.hint}/>);
    if (showCodes){
        questionOrCodes =(<BasicTabs 
            pythonCode={dummyData.dummyCode.pythonCode}
            javaCode={dummyData.dummyCode.javaCode}
            cppCode={dummyData.dummyCode.cppCode}
        />);
    }
    return (
        <>
            <SplitPane split="vertical" minSize={50} defaultSize={100}>
                <div>
                <QuestionTitle title={props.question.problemTitle} videoUrl={props.question.problemUrl}/>
                {questionOrCodes}
                </div>
                <div>
                    <QuestionOptions 
                        problem={props.question.problem} 
                        choices={props.question.options}
                        toggleCode={toggleCodeVisibility}
                    />
                </div>
            </SplitPane> 
        </>
    );
}