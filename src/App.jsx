import React, { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { Header } from './components/Header/Header'
import { CourseInfo, Courses } from './components';
import styles from './App.module.css';

// use mocked data till API implementation

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {

	const [courseIdToShow, setCourseIdToShow] = useState(null);

	const handleShowCourse = (courseId = null) => {
		setCourseIdToShow(courseId);
	}

	// write your code here

	return (
		<div className={styles.main}>

			<Header></Header>
			<div className={styles.container}>
				{ courseIdToShow ? 
					<CourseInfo 
						coursesList={mockedCoursesList}
						authorsList={mockedAuthorsList}
						onBack={handleShowCourse}
						showCourseId={courseIdToShow}
					/> : 
					<Courses
						coursesList={mockedCoursesList}
						authorsList={mockedAuthorsList}
						handleShowCourse={ handleShowCourse } />
				}

			</div>
		</div>

	);
}

export default App;
