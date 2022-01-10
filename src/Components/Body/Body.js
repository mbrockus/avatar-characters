import React from 'react';
import CardList from './CardList/CardList';
import DetailedCard from './DetailedCard/DetailedCard';
import { Link } from 'react-router-dom';
import { DataContext } from '../../dataContext';
import { useContext } from 'react';



function Body(props) {

     const { fetchData } =useContext(DataContext);
    return (
        <div>
            {/* <DetailedCard/> */}
            <button onClick={fetchData}>See all Characters</button>
            <CardList/>
        </div>
    );
}

export default Body;