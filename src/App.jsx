// import React, { useState } from 'react';
import {
  Routes,
  Route,
	Navigate,
	useNavigate
} from "react-router-dom";
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { Header } from './components/Header/Header'
import { Courses, CourseInfo, Registration, Login } from './components';
import styles from './App.module.css';
import { useEffect } from "react";

// use mocked data till API implementation

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {

	const navigate = useNavigate();

	const handleShowCourse = (courseId = null) => {
		if (courseId) {
			navigate(`/courses/${courseId}`);
			return;
		}

		navigate('/courses')
	}

	const activeRouters = localStorage.getItem('token') ? <>
		<Route path="/courses" element={
			<Courses
				coursesList={mockedCoursesList}
				authorsList={mockedAuthorsList}
				handleShowCourse={ handleShowCourse }
			/>
		}>
		</Route>
		<Route path="/courses/:courseId" element={
			<CourseInfo 
				coursesList={mockedCoursesList}
				authorsList={mockedAuthorsList}
				onBack={handleShowCourse}
			/>
		}>
		</Route>
		<Route
			path="*"
			element={<Navigate to="/courses" />}
		/>
		</> : <>
			<Route path="/registration" element={<Registration />}/>
			<Route path="/login" element={<Login />}/>
			<Route
				path="*"
				element={<Navigate to="/login" />}
			/>
		</>

	useEffect(() => {

	}, [])

	// write your code here

	return (
		<div className={styles.main}>

			<Header></Header>

			<div className={styles.container}>
				<Routes>
					{activeRouters}
				</Routes>
			</div>
		</div>

	);
}

export default App;
