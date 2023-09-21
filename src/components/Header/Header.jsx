import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button';
import { Logo } from '../../components/Header/components/Logo';

import styles from './styles.module.css';

export const Header = () => {
	
	// write your cose here
	const navigate = useNavigate();

	const userName = localStorage.getItem('userName');

	const logout = () => {
		localStorage.clear();
		navigate('/')
	}

	const login = () => {
		navigate('/login')
	}

	return (
		<div className={styles.headerContainer}>

			<Logo />

			<div className={styles.userContainer}>
				{ userName ? <>
						<p className={styles.userName}>{userName}</p>
						<Button buttonText={'Logout'} handleClick={logout}></Button>
					</> : <>
						<Button buttonText={'Login'} handleClick={login}></Button>
					</>
				}
			</div>
		</div>
	);
};
