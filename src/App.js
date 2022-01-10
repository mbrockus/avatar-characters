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
      search: '',
		};



	const [formState, setFormState] = useState(initialState);


	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(`formstate search is ${formState.search}`);

		charSearch(formState.search);
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

	function charSearch(search) {
		const url = `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${search}`;
		// console.log('in charSearch');
		// console.log(url);
    // console.log('?name=${search}}');

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCards(res);
			})
			.catch((err) => console.error(`Oops, something went wrong: ${err}`));
	}

	return (
		<div className='app'>
			<DataContext.Provider
				value={{ formState, handleSubmit, charSearch, cards, setCards, handleChange }}>
				<Header

				/>
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
