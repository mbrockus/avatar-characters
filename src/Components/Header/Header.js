import React from 'react';
import Form from './Form/Form';
import Nav from './Nav';

function Header(props) {
    return (
			<div>
				<h1>Avatar Characters</h1>
				<Form />
				<Nav />
			</div>
		);
}

export default Header;