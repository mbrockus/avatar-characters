import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function EarthNation(props) {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {
		fetch(
			'https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=earth&perPage=NUMBER&page=500'
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
		<section className='container'>
			{cards.map((card) => (
				<div key={card._id} className='card'>
					<h2>{card.name}</h2>
					<img src={card.photoUrl} alt={card.named} />
				</div>
			))}
		</section>
	);
}

export default EarthNation;
