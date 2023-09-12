import React from 'react';
import { Button } from '../../common/Button';
import { Logo } from '../../components/Header/components/Logo';

import styles from './styles.module.css';

export const Header = () => {
	
	// write your cose here

	return (
		<div className={styles.headerContainer}>

			<Logo />

			<div className={styles.userContainer}>
				<p className={styles.userName}>Boris</p>
				<Button buttonText={'Login'} handleClick={()=>{console.log('Login Button click')}}></Button>
			</div>
		</div>
	);
};
