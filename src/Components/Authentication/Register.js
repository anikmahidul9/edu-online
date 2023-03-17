import React, { useState,useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider";
import { FaGithub, FaGoogle} from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

  const {createUser,Providerlogin,updateUser, providerloginGithub} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

    const [accepted, setAccepted] = useState(false);
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const firstName =  form.name1.value;
      const lastName = form.name2.value;
      const name = firstName.concat(" ",lastName);
      const photoUrl = form.photourl.value;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email,password)
      .then(result=>{
        const user = result.user;
        console.log(user);
        form.reset();
        handleUserProfile(name,photoUrl)
    })
    .catch(error=>console.error(error))
}
const handleUserProfile = (name,photoURL)=>{
  const profile = {
    displayName: name,
    photoURL: photoURL
}
updateUser(profile)
.then(() => { })
.catch(error => console.error(error));
}
const handleGoogle = ()=>{
  Providerlogin(googleProvider)
  .then(result => {
      const user = result.user;
      navigate('/')
      console.log(user);
  })
  .catch(error => console.error(error))
}

const handleGithub = ()=>{
  providerloginGithub(githubProvider)
  .then(result=>{
    const user = result.user;
    navigate('/')
    console.log(user);
  }).catch(error=>console.error(error))
}
    
    return (
        <Form className='w-50' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <div className='d-flex'>
          <Form.Control className='w-50 me-4' name='name1' type="text" placeholder="Enter first name" />
          <Form.Control className='w-50' name='name2' type="text" placeholder="Enter last name" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photourl' placeholder="Photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onClick={handleAccepted}
                    label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
        </Form.Group>
        <Button className='me-4' variant="primary" type="submit" disabled={!accepted}>
          Sign Up
        </Button>
        <Link to="/login" variant="info">Already have account?</Link>
        <div className='mt-4'>
        <Button onClick={handleGoogle} className='me-4' variant="light"><FaGoogle/> Google</Button>{' '}
        <Button onClick={handleGithub} variant="light"><FaGithub/> Github</Button>{' '}
        </div>
      </Form>
    );
};

export default Register;