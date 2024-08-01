// useState allows you to add a state to a functional component
// useEffect let's you perform data fetching
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';

// Diagram is a functional component
const Diagram = () => {
  const [imageSrc, setImageSrc] = useState('');
  const router = useRouter();

  // runs the enclosed code after component mounts
  useEffect(() => {
    // fetch the image from the backend
    Axios({
      method: 'GET',
      url: 'http://localhost:8080/get/image',
      params: { keyword: 'string' },
    })
      .then(res => {
        setImageSrc(res.data.imageUrl);
      })
      .catch(err => {
        console.error(err);
      });
  }, []); // empty array means effect only runs once after initial render

  // goBack function navigates user back to home page
  const goBack = () => {
    router.push('/');
  };

  // the render stuff 
  return (
    <div className="diagram">
      <h1>Generated String Diagram</h1>
      {imageSrc ? (
        <img src={imageSrc} alt="Generated String Diagram" />
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={goBack} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        back to start
      </button>
    </div>
  );
};

export default Diagram;
