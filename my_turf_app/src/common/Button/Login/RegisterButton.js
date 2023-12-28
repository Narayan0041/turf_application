import React from 'react';

const RegisterButton = ({ text, active, handleClick, className }) => {
  return (
    <button className={`RegisterButton ${active ? "active" : ""} ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default RegisterButton;
