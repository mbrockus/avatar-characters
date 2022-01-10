import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../../../../dataContext'
import {useContext} from 'react'

function Card(props) {



    const { formState, handleSubmit, charSearch, cards, setCards } = useContext(DataContext)


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