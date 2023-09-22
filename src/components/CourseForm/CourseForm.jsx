import React, { useState } from 'react';

import styles from './styles.module.css';
import { Button, Input } from '../../common';
import { AuthorItem, CreateAuthor } from './components';

export const CourseForm = ({authorsList, createCourse, createAuthor}) => {

	const [authors, setAuthors] = useState([]);

	const addAuthor = (author) => {
		if (!authors.find(authorInList => authorInList.id === author.id)) {
			setAuthors([...authors, author]);
		}
	}

  const handleSubmit = (e) => {
		e.preventDefault();
		createCourse();
  }

	return (
		<form onSubmit={handleSubmit}>
			<div>
        <Input labelText="Title" placeholderText="Input text" data-testid="titleInput"></Input>

        <Button buttonText="Save course" placeholderText="Input text" data-testid="createCourseButton"></Button>
			</div>

			<label>
				Description
				<textarea data-testid="descriptionTextArea" />
			</label>

			<div className={styles.infoWrapper}>
				<div>
          <CreateAuthor onCreateAuthor={createAuthor}></CreateAuthor>
					<p>Duration: </p>
          <Input labelText="Duration" placeholderText="Input text" data-testid="durationInput"></Input>
				</div>

				<div className={styles.authorsContainer}>
					<strong>Authors</strong>

          {authorsList.map(author => <AuthorItem author={author} addAuthor={ addAuthor }></AuthorItem>)}

					<strong>Course authors</strong>

					{ authors.map(author => <p data-testid="selectedAuthor">{author.name}</p>) }

					{ !authors.length && <p className={styles.notification}>List is empty</p> }
				</div>
			</div>
		</form>
	);
};
