import React from 'react';
import Form from './Form/Form';
import Nav from './Nav';

function Header(props) {
    // console.log(props)
    return (
			<div>
				<h1>Avatar Characters</h1>
				<Form
					formState={props.formState}
					setFormState={props.setFormState}
					handleSubmit={props.handleSubmit}
					handleChange={props.handleChange}
				/>
				<Nav />
			</div>
		);
}

export default Header;