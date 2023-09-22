import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
	Link
} from "react-router-dom";
import { Button, Input } from '../../common';

import styles from './styles.module.css';
import { login } from '../../services';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
	
	// write your code here
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login({
      email,
      password
    })

    const token = localStorage.getItem('token');

    if (token) {
      navigate('/courses');
    }

    console.log(email, password)
  }

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>

        <Input placeholderText="Input text" type="text" labelText="Email" onChange={ (e) => { setEmail(e.target.value) }}></Input>
        <Input placeholderText="Input text" type="password" labelText="Password" onChange={ (e) => { setPassword(e.target.value) }}></Input>

        <Button buttonText="Login" handleClick={() => {}}></Button>

			</form>
			<p>
				If you don't have an account you can&nbsp;
				<Link to="/registration">registration</Link>
			</p>
		</div>
	);
};
