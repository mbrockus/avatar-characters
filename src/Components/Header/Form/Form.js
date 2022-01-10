import React, { useState } from 'react';


function Form(props) {
    console.log(props)
    // const initialState = {
	// 		searchString: 'search',
	// 		message: '',
	// 	};

    // const [formState, setFormState] = useState(initialState);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log('form submitteed')
    //     setFormState(initialState);
        
    // };


    // const handleChange = (event) => {
	// 		const newState = { ...formState, [event.target.id]: event.target.value };
	// 		setFormState(newState);
            
	// 	};

    const randomSearch = () => {
        console.log('random search')
    }

    const { formState, handleChange, handleSubmit, setFormState } = props

    console.log(formState)
        
    return (
			<form onSubmit={handleSubmit}>
				<label htmlFor='search'>Search:</label>
				<input
					type='text'
					id='search'
					value={formState.subject}
					onChange={handleChange}
				/>
				<button onClick={randomSearch}>Random</button>
				<button type='submit'>Send</button>
			</form>
		);
}

export default Form;