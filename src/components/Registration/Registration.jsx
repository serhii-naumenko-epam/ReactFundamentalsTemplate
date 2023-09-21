import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Link
} from "react-router-dom";
import { Button, Input } from '../../common';
import { createUser } from '../../services';

import styles from './styles.module.css';

export const Registration = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate()
	
	// write your code here
  const handleSubmit = async (e) => {
    e.preventDefault();

		const createUserResult = await createUser({
			name,
			email,
			password
		});

		console.log('successful', createUserResult)

		if (createUserResult.successful) {
			navigate('/')
		}
	}

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Registration</h1>

        <Input placeholderText="Input text" type="text" labelText="Name" onChange={(e) => { setName(e.target.value) }}></Input>
        <Input placeholderText="Input text" type="text" labelText="Email" onChange={(e) => { setEmail(e.target.value) }}></Input>
        <Input placeholderText="Input text" type="password" labelText="Password" onChange={(e) => { setPassword(e.target.value) }}></Input>
        <Button buttonText="Login" handleClick={() => {}}></Button>
			</form>
			<p>
				If you have an account you can&nbsp;
				<Link to="/login">log in</Link>
			</p>
		</div>
	);
};
