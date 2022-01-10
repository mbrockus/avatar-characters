import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function AirNation(props) {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {
		fetch(
			'https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=air'
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setCards(res);
			})
			.catch((err) => console.error(`Oops, something went wrong: ${err}`));
	}
	console.log(cards);

	return (
		<div>
			{cards.map((card) => (
				<div key={card._id} className='card'>
					<h2>{card.name}</h2>
					<img src={card.photoUrl} alt={card.named} />
				</div>
			))}
		</div>
	);
}

export default AirNation;
