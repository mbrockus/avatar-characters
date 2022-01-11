import React, { useState } from 'react';
import { DataContext } from '../../../dataContext.js';
import { useContext } from 'react';
import './Form.css'


function Form(props) {


    const { charSearch, formState, handleChange, handleSubmit } = useContext(DataContext);

        
    return (
			<form onSubmit={handleSubmit}>
				<label htmlFor='search'>Search:</label>
				<input
					type='text'
					id='search'
					value={formState.subject}
					onChange={handleChange}
				/>
				{/* <button onClick={randomSearch}>Random</button> */}
				<button type='submit'>Submit</button>
			</form>
		);
}

export default Form;