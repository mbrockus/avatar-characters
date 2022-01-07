import React from 'react';
import Image from './Image.js';
import { useState } from 'react';
import { useEffect } from 'react';

function Card(props) {


    useEffect(() => {
			fetchData();
		}, []);

    function fetchData(event) {
			fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
				.then((res) => res.json())
				.then((data) => console.log(data))
				.catch((err) => console.error(`Oops, something went wrong: ${err}`));
		}

    return (
        <div>
            <Image/>
        </div>
    );
}

export default Card;