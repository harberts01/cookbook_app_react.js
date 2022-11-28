import React from "react";
import Button from 'react-bootstrap/Button';

function CreateNewBtn() {
  return (
    <div className="text-center mt-5">
        <Button style={{width: 400}}variant="success" size='lg'>Create New CookBook</Button>{' '}
    </div>
    
  );
}

export default CreateNewBtn;