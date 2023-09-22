import React from 'react';

import styles from './styles.module.css';
import { Button } from '../../../../common';

export const AuthorItem = ({ author, addAuthor }) => (
	<div className={styles.authorItem} data-testid='authorItem'>
		<span>{author.name}</span>

    <Button buttonText="Add author" handleClick={() => { addAuthor(author) }} data-testid="addAuthor"></Button>
		
	</div>
);
