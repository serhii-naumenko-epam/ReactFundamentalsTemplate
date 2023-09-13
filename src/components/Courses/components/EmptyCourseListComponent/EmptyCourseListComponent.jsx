// import React from 'react';
import { Button } from '../../../../common';

import styles from './styles.module.css';

export const EmptyCourseListComponent = ({course, handleShowCourse, authorsList}) => {

	// write your code here

	return (
		<div className={styles.container} data-testid="emptyContainer">
			<h2>Your List Is Empty</h2>
			<p>Please use ’Add New Course’ button to add your first course</p>
			<Button buttonText="Add new course" data-testid="addCourse"></Button>
		</div>
	);
};
