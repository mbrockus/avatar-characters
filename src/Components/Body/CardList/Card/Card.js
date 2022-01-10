import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../../../../dataContext.js'
import {useContext} from 'react'

function Card(props) {

    const [cards, setCards] = useState([])

    useEffect(() => {
			fetchData();
		}, []);

    const { formState } = useContext(DataContext)
    let url = `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${formState.search}`

    console.log(url)
     

    function fetchData(url) {
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					setCards(res);
				})
				.catch((err) => console.error(`Oops, something went wrong: ${err}`));
            }

    // console.log(formState.search)

    return (
			<div>
				{cards.map((card) => (
					<div key={card._id} className='card'>
                        <h2>{card.name}</h2>
						<img src={card.photoUrl} alt={card.named}/>
					</div>
				))}
			</div>
		);
}

export default Card;