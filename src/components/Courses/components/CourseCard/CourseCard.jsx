import React from 'react';
import { mockedAuthorsList } from '../../../../constants';
import { Button } from '../../../../common';

import styles from './styles.module.css';

import { getCourseDuration, formatCreationDate } from '../../../../helpers';

export const CourseCard = ({course, handleShowCourse, authorsList}) => {

		// write your code here

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					{course.authors.map(authorId => (<span>{mockedAuthorsList.find(author => authorId === author.id).name}</span>))}
				</p>
				<p>
					<b>Duration:</b>
					<span>{getCourseDuration(course.duration)}</span>
				</p>
				<p>
					<b>Created: </b>
					<span>{formatCreationDate(course.creationDate)}</span>
				</p>
				<div>
					<Button buttonText="Show course"></Button>
					<Button data-testid="deleteCourse"></Button>
					<Button button with data-testid="updateCourse"></Button>

					{/* // reuse Button component for 'Show course' button
					// reuse Button component for 'Delete' button with data-testid="deleteCourse"
					// reuse Button component for 'Update' button with data-testid="updateCourse" */}

				</div>
			</div>
		</div>
	);
};
