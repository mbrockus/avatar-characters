import React from 'react';
import CardList from './CardList/CardList';
import DetailedCard from './DetailedCard/DetailedCard';
import { DataContext } from '../../dataContext';
import { useContext } from 'react';
import './Body.css'



function Body(props) {

     const { fetchData } =useContext(DataContext);
    return (
        <div>
            {/* <DetailedCard/> */}
            <button onClick={fetchData} className='bigButton'>See all Characters</button>
            <CardList/>
        </div>
    );
}

export default Body