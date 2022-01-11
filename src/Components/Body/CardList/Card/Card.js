import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../../../../dataContext'
import {useContext} from 'react'

function Card(props) {



    const { formState, handleSubmit, charSearch, cards, setCards } = useContext(DataContext)


    return (
			<section className='container'>
				{cards.map((card) => (
					<div key={card._id} className='card'>
                        <h2 className='card-title'>{card.name}</h2>
						<img src={card.photoUrl} alt={card.name} className='card-image'/>
					</div>
				))}
			</section>
		);
}

export default Card;