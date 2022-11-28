import React from 'react'
import Button from 'react-bootstrap/Button';

function ShowBooksBtn() {
  return (
    <div className="text-center mt-5">
        <Button style={{width: 400}} variant="success" size='lg'  >Open A Cookbook!</Button>
    </div>
    
  );
}

export default ShowBooksBtn;