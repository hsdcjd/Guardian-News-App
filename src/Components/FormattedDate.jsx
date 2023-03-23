import React from 'react';

const today = new Date();
const formattedDate = today.toLocaleString
    ('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });



const FormattedDate = () => {
  return (
    <div>{formattedDate}</div>
  )
};

export default FormattedDate;