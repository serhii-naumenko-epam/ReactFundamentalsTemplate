import React, { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { Header } from './components/Header/Header'
import { CourseInfo, Courses } from './components';
import styles from './App.module.css';

// use mocked data till API implementation

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {

	const [courseToShow, setCourseToShow] = useState(null);

	const handleShowCourse = (course = null) => {
		setCourseToShow(course);
	}

	// write your code here

	return (
		<div className={styles.main}>

			<Header></Header>
			<div className={styles.container}>
				{ courseToShow ? 
					<CourseInfo 
						course={courseToShow}
						authorsList={mockedAuthorsList}
						onBack={handleShowCourse}
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
