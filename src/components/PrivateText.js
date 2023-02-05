import { useState, useEffect } from 'react';

const PrivateText = ({ currUser }) => {
  const [message, setMessage] = useState(null);
  const getText = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/reservations/index', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      });
      if (!response.ok) throw Error;
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.log('error', error);
      setMessage(null);
    }
  };
  useEffect(() => {
    if (currUser) { getText(); }
  }, [currUser]);
  return (
    <div>{message}</div>
  );
};
export default PrivateText;
