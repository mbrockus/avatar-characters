import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import AirNation from './Components/Body/Nations/AirNation';
import WaterNation from './Components/Body/Nations/WaterNation';
import EarthNation from './Components/Body/Nations/EarthNation';
import FireNation from './Components/Body/Nations/FireNation';
import { useState, useEffect } from 'react'
import { DataContext } from './dataContext.js';


function App() {

    const [cards, setCards] = useState([]);

    const initialState = {
      searchString: 'search',
      message: '',
    };

    const [formState, setFormState] = useState(initialState);
    const handleSubmit = (event) => {
      event.preventDefault();
      // console.log('form submitteed')
      setFormState(initialState);
    };

    const handleChange = (event) => {
      const newState = {
        ...formState,
        [event.target.id]: event.target.value,
      };
      setFormState(newState);
    };

		useEffect(() => {
			fetchData();
		}, []);

		function fetchData() {
			fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					setCards(res);
				})
				.catch((err) => console.error(`Oops, something went wrong: ${err}`));
		}

  return (
		<div className='app'>
			<h1>Avatar Characters</h1>
			<Header  
      formState={formState} 
      setFormState={setFormState} 
      handleSubmit={handleSubmit} 
      handleChange={handleChange} />
      <DataContext.Provider value={{ formState }}>
			<Routes>
				<Route path='/Dashboard' element={<Body />} />
				<Route path='/AirNation' element={<AirNation />} />
				<Route path='/WaterNation' element={<WaterNation />} />
				<Route path='/EarthNation' element={<EarthNation />} />
				<Route path='/FireNation' element={<FireNation />} />
			</Routes>
      </DataContext.Provider>
			{/* <Body/> */}
		</div>
	);
}

export default App;
