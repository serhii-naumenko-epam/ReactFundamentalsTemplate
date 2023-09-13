// import React from 'react';
import { Button } from '../../../../common';

import styles from './styles.module.css';

import { getCourseDuration, formatCreationDate } from '../../../../helpers';

export const CourseCard = ({course, handleShowCourse, authorsList}) => {

		// write your code here
	const getCourseAuthors = () => {
		const courseAuthors = course.authors.map(authorId => authorsList.find(author => authorId === author.id).name ).join(', ');

		return courseAuthors;
	}

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					{getCourseAuthors()}
				</p>
				<p>
					<b>Duration: </b>
					<span>{getCourseDuration(course.duration)}</span>
				</p>
				<p>
					<b>Created: </b>
					<span>{formatCreationDate(course.creationDate)}</span>
				</p>
				<div>
					<Button buttonText="Show course" handleClick={() => {handleShowCourse(course)}}></Button>
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
