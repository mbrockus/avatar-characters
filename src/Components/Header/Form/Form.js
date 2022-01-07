import React, { useState } from 'react';


function Form(props) {
    const initialState = {
			allies: '',
			enemies: '',
            affiliateNation: '',
			searchString: 'search',
			message: '',
		};

            const [formState, setFormState] = useState(initialState);
            const handleSubmit = (event) => {
                event.preventDefault();
                // console.log('form submitteed')
                setFormState(initialState);
            };


    const handleChange = (event) => {
			const newState = { ...formState, [event.target.id]: event.target.value };
			setFormState(newState);
		};

    const randomSearch = () => {
        console.log('random search')
    }
        
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
				<label htmlFor='allies'>Allies:</label>
				<select id='allies' value={formState.allies} onChange={handleChange}>
					<option value='outage'>Service Outage</option>
					<option value='billing'>Billing</option>
					<option value='cancel'>Cancel Service</option>
				</select>
				<label htmlFor='enemies'>Enemies:</label>
				<select id='enemies' value={formState.enemies} onChange={handleChange}>
					<option value='outage'>Service Outage</option>
					<option value='billing'>Billing</option>
					<option value='cancel'>Cancel Service</option>
				</select>
				<label htmlFor='affiliateNation'>Nation:</label>
				<select
					id='affiliateNation'
					value={formState.allies}
					onChange={handleChange}>
					<option value='fire'>Fire</option>
					<option value='water'>Water</option>
					<option value='earth'>Earth</option>
					<option value='air'>Air</option>
				</select>
				<button type='submit'>Send</button>
			</form>
		);
}

export default Form;