// import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { EmptyCourseListComponent } from './components/EmptyCourseListComponent/EmptyCourseListComponent';

import styles from './styles.module.css';

export const Courses = ({coursesList, authorsList, handleShowCourse}) => {

	// write your code here

	// for EmptyCourseListComponent container use data-testid="emptyContainer" attribute
	// for button in EmptyCourseListComponent add data-testid="addCourse" attribute

	if (!coursesList.length) {
		return <EmptyCourseListComponent data-testid="emptyContainer"/>
	}

	return (
		<>
			<div className={styles.panel}>
				<Link to='/courses/add'><Button buttonText="Add new course"></Button></Link>
			</div>

			{ coursesList.map((course, index)=> 
				<CourseCard
					key={`course-${index}`}
					course={course}
					authorsList={authorsList}
					handleShowCourse={handleShowCourse}
				/>)}
			
		</>
	);
};
