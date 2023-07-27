import React, { useEffect, useState } from 'react';
import CustomAppbar from '@/components/custom_appbar'
import CircularProgress from '@mui/material/CircularProgress'
import QuestionDisplayCard from '@/components/question_display';
import { useRouter } from 'next/router';
import questionFetchMap from '@/utils/questions_methods';

const SolveQuestions = () => {
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState(false)
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const {mode, pack, count} = router.query

  const moveToNextProblem = () => {
    if (currentIndex >= data.length) return;
    setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await questionFetchMap[mode](count, pack); // Replace with your API endpoint URL
        
        if (mode != 'quiz'){
          const dd = response.map(q => q.question)
          setData(dd)
        }else{
          setData(response)
        }
        // setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setDataError(true)
      }
    };

    fetchData();
  }, []);

  let body = <></>;
  if (data.length > 0){  
    body =   ( <QuestionDisplayCard  question={data[currentIndex]} questionNo={currentIndex+1} moveToNext={moveToNextProblem} />);
  }
  
  if (loading) {
    // Render a loading animation or spinner
    body = <CircularProgress color="inherit" />;
  }else if (dataError){
    return (
      <>
        <p>Failed to fetch data, please ensure you have internet and authenticated if necessary and try again</p>
      </>
    );
  }

  return (
    <>
      <CustomAppbar/>
      {body}
    </>
  );
};

export default SolveQuestions;