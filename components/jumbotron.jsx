import React from 'react';
import Typography from '@mui/material/Typography';

const ImageOverlayComponent = (props) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundImage: 'url("/images/technical-interivew-preparation.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <Typography color="white" variant='h3'>
            {props.title}
        </Typography>
        <Typography variant='body1' color="white">{props.description}</Typography>
        {props.children}
      </div>
    </div>
  );
};

export default ImageOverlayComponent;
