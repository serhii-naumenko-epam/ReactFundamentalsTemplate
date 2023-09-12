import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';

import styles from './styles.module.css';

export const Courses = ({coursesList, authorsList, handleShowCourse}) => {

	// write your code here

	// for EmptyCourseListComponent container use data-testid="emptyContainer" attribute
	// for button in EmptyCourseListComponent add data-testid="addCourse" attribute

	return (
		<>
			<div className={styles.panel}>
				// reuse Button component for 'Add new course' button
			</div>

			{ coursesList.map((course, index)=> <CourseCard key={`course-${index}`} course={course} handleShowCourse={() => {console.log('handleShowCourse')}}></CourseCard>)}
			
		</>
	);
};
