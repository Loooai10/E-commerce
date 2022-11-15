import React, { useState } from 'react'
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {

    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = { ...newUser }; // ... means making copy
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const navigate = useNavigate()

    const regsiterHandler = (e) => {
        e.preventDefault()
        props.register(newUser)
        navigate('/profile')
    }

    return (
        <div>
            <h1>Signup</h1>

            <Container>
                {/* <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" onChange={changeHandler}></Form.Control>
            </Form.Group> */}

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <br></br>

                <Button variant="primary" onClick={regsiterHandler}>Register</Button>

            </Container>

        </div>
    )
}