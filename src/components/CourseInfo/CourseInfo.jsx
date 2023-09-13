// import React from 'react';

import { Button } from '../../common/Button/index';

import { formatCreationDate, getCourseDuration } from '../../helpers';

import styles from './styles.module.css';

export const CourseInfo = ({course, authorsList, onBack, showCourseId}) => {

	// write your code here

	return (
		<div data-testid='courseInfo'>
			{/* // Module 1: reuse Button component for 'onBack' functionality 
			// Module 2: use 'react-router-dom' 'Link' component for button 'Back' */}

			<h1>{course.title}</h1>
			<div className={styles.courseInfo}>
				<p className={styles.description}>{course.description}</p>
				<div>
					<p>
						<b>ID: </b>
						{course.id}
					</p>
					<p>
						<b>Duration: </b>
						{getCourseDuration(course.duration)}
					</p>
					<p>
						<b>Created: </b>
						{formatCreationDate(course.creationDate)}
					</p>
					<div>
						<b>Authors</b>
						<ul className={styles.authorsList}>
							{course.authors.map((authorId, idnex) => (<li key={`author-${idnex}`}>{authorsList.find(author => authorId === author.id).name}</li>) )}
						</ul>
					</div>
				</div>
			</div>
			<Button
				buttonText='Back' 
				handleClick={() => onBack(null)}
			/>
		</div>
	);
};
