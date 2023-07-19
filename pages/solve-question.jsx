import React, { useEffect, useState } from 'react';
import CustomAppbar from '@/components/custom_appbar'
import CircularProgress from '@mui/material/CircularProgress'
import QuestionDisplayCard from '@/components/question_display';

const SolveQuestions = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7129/api/quiz/cards?number=5&pack=2'); // Replace with your API endpoint URL
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let body = <></>;
  if (data.length > 0){  
    body =   (<QuestionDisplayCard question={data[currentIndex]}/>);
  }
  
  if (loading) {
    // Render a loading animation or spinner
    body = <CircularProgress color="inherit" />;
  }

  return (
    <>
      <CustomAppbar/>
      {body}
    </>
  );
};

export default SolveQuestions;



/*
const options = {method: 'GET'};

fetch('https://localhost:7129/api/quiz/cards?number=5&pack=2', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
*/