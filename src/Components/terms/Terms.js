import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate('/register')
    }
    return (
        <Alert variant="info" className='mt-4'>
      <Alert.Heading>Hey, nice to see you. Read carefully</Alert.Heading>
      <p>
      These Terms and Conditions govern your use of our website and any associated services. By registering and logging into our website, you agree to be bound by these Terms and Conditions.
      </p>
      <hr />
      <p className="mb-0">
      To access certain features on our website, you may be required to create an account and provide personal information. You agree to provide accurate and complete information when creating an account, and to keep your login details secure and confidential.
      </p>
      <Button variant="primary" type="submit" onClick={handleNavigate}>
          Agree
        </Button>
    </Alert>
    
    );
};

export default Terms;