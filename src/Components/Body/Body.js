import React from 'react';
import CardList from './CardList/CardList';
import DetailedCard from './DetailedCard/DetailedCard';


function Body(props) {
    return (
        <div>
            <DetailedCard/>
            <CardList/>
        </div>
    );
}

export default Body;