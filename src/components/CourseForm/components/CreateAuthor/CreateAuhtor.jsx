import React from "react";
import { Button, Input } from "../../../../common";

export const CreateAuthor = ({onCreateAuthor}) => {
  // write your code here
  return (
    <div>
      <h2>Add author</h2>
      <Input labelText="Author Name" placeholderText="Input text" data-testid="createAuthorInput"></Input>
      <Button buttonText="Create Author" data-testid="createAuthorButton" handleClick={onCreateAuthor}></Button>
    </div>
  );
};
