import React from 'react';
import Details from './Details';
import Name from './Name';
import Image from './Image';

function DetailedCard(props) {
    return (
        <div>
            <Details/>
            <Name/>
            <Image/>
        </div>
    );
}

export default DetailedCard;