import React from 'react';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { Header } from './components/Header/Header'
import { Courses } from './components';
import { Button } from './common';
import styles from './App.module.css';

// use mocked data till API implementation

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {

	// write your code here

	return (
		<div className={styles.main}>

			<Header></Header>
			<div className={styles.container}>
				<Button buttonText="Add new course"></Button>
				<Courses
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
					handleShowCourse={ () => { console.log('handleShowCourse') } }>

				</Courses>
			</div>
		</div>

	);
}

export default App;
