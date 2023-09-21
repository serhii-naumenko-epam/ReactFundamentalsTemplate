import React from 'react';

// import styles from './styles.module.css';

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  type,
  'data-testid': dataTestId
}) => (
<label>
	{labelText}
	<input onChange={onChange} placeholder={placeholderText} type={type} data-testid={dataTestId} />
</label>
);
