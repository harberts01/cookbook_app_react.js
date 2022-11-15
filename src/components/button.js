import React from "react";
import Button from 'react-bootstrap/Button';

function CreateNewBtn() {
  return (
    <div className="d-grid gap-2 mt-5">
        <Button variant="success" size='lg'>Create New CookBook</Button>{' '}
    </div>
    
  );
}

export default CreateNewBtn;