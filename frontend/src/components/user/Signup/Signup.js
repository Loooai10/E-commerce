// import React, {useState} from 'react'
// import {Container, Form, Button} from "react-bootstrap";
// import { useNavigate } from 'react-router-dom'
// import  './Style.css';
// // import "bootstrap/dist/css/bootstap.min.css";

// export default function Signup(props) {

//     const [newUser, setNewUser] = useState({});

//     const changeHandler = (e) => {
//         const user = { ...newUser }; // ... means making copy
//         user[e.target.name] = e.target.value;
//         console.log(user);
//         setNewUser(user);
//     }

//     const navigate = useNavigate()

//     const regsiterHandler = (e) => {
//         e.preventDefault()
//         props.register(newUser)
//         navigate('/Signin')
//     }

//   return (
//     <div>
//       <h1>Signup</h1>
 
// <Container>
//     {/* <Form.Group>
//   <Form.Label>Name</Form.Label>
//  <Form.Control name="name" onChange={changeHandler}></Form.Control>
// </Form.Group> */}

//    <Form.Group>
//     <Form.Label>Username</Form.Label>
//        <Form.Control name="username" onChange={changeHandler}></Form.Control>
// </Form.Group>

//   <Form.Group>
//     <Form.Label>Email Address</Form.Label>
//  <Form.Control name="email" onChange={changeHandler}></Form.Control>
//  </Form.Group>

//  <Form.Group>
//  <Form.Label>Password</Form.Label>
//  <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
//  </Form.Group>

// <br></br>

// <Button variant="primary" onClick={regsiterHandler}>Register</Button>
// </Container>
        
//  </div>
//   )
// }
import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './Signup.css'

 export default function Signup(props) {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [newUser, setNewUser] = useState({});
  const regsiterHandler = (e) => {
    e.preventDefault();
    navigate('/Signin');
    props.register(newUser) 
  }

    const changeHandler = (e) => {
      const user = { ...newUser };
      user[e.target.name] = e.target.value;
      setNewUser(user);

      if(!user.firstName || !user.lastName || !user.mobile || !user.email ||  !user.password  || !user.role){
        setDisabled(true)
      }else{
        setDisabled(false)
      } 
    }

  return (
    <div>
      <Container>
        <Row>
          <Col className='left-row' ></Col>
          <Col className='right-row' xs={8 }>
          <h1 className='signup'>Signup</h1>
          <br/>
          <Form  id='signUpForm' onSubmit={regsiterHandler}>
            <div className="form-floating mb-3">
              <input type="text" name="userName" onChange={changeHandler} className="form-control" id="floatingInput"  placeholder="User Name" required/>
              <label htmlFor="floatingInput">Last Name</label>
            </div>
                 <div className="form-floating mb-3">
              <input  type="email" name="email" onChange={changeHandler} className="form-control" id="floatingInput"  placeholder="Email Address" required/>
              <label htmlFor="floatingInput">Email Address</label>
              <Form.Text className="text-muted">
                
                </Form.Text>
            </div>
            <div className="form-floating mb-3">
              <input type="password" name="password" autoComplete='' onChange={changeHandler} className="form-control" id="floatingPassword"  placeholder="Password" required/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline radio-group-container">
     </div>
               
            <Button className="submit-button" disabled={disabled} type='submit'>Signup</Button>
              <p className="signup-text">
                Already have an account? <a  href="/Signin">Login</a>
              </p>
          </Form>
        </Col>
      </Row>
    </Container>    
  </div>
  );
}
