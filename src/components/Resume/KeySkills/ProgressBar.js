import React from 'react'

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 5,
      width: '90%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 20
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
