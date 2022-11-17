import React, { useState } from 'react'
import { Container, Form, Button } from "react-bootstrap";
import axios from 'axios';

export default function Signin(props) {

    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        console.log(newUser)
        axios.post("http://localhost:4000/auth/signin", newUser)
            .then(res => {
                console.log(res)

                // Store the token in Local Storage.
                if (res.data.token != null) {
                    localStorage.setItem("token", res.data.token);
                    // let user = jwt_decode(res.data.token);
                    // setIsAuth(true);
                    // setUser(user);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Signin</h1>

            <Container>

                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <br></br>

                <Button variant="primary" onClick={loginHandler}>login</Button>

            </Container>

        </div>
    )
}
