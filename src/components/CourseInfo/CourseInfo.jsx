// import React from 'react';

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../../common/Button/index';

import { formatCreationDate, getCourseDuration } from '../../helpers';

import styles from './styles.module.css';

export const CourseInfo = ({coursesList, authorsList, onBack}) => {

	// write your code here
	let { courseId } = useParams(); 
	let [ course ] = useState(coursesList.find(({id}) => courseId === id));

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
			<Link to='/courses'><Button
				buttonText='Back' 
				handleClick={() => {}}
			/></Link>
		</div>
	);
};
