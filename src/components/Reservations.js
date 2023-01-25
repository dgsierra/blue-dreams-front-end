import React from 'react';

export default function Reservations() {
  return <div>Component Reservations</div>;
}

const response = await fetch(
  'https://blue-dreams-back-end.herokuapp.com/logout',
  {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
  },
);

const data = await response.json();
if (!response.ok) throw data.error;

localStorage.removeItem('token');
// eslint-disable-next-line no-undef
setCurrUser(null);
