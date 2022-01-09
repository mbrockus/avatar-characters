import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import AirNation from './Components/Body/Nations/AirNation';
import WaterNation from './Components/Body/Nations/WaterNation';
import EarthNation from './Components/Body/Nations/EarthNation';
import FireNation from './Components/Body/Nations/FireNation';


function App() {
  return (
		<div className='app'>
			<h1>Avatar Characters</h1>
			<Header />
			<Routes>
				<Route path='/Dashboard' element={<Body />} />
				<Route path='/AirNation' element={<AirNation />} />
				<Route path='/WaterNation' element={<WaterNation />} />
				<Route path='/EarthNation' element={<EarthNation />} />
				<Route path='/FireNation' element={<FireNation />} />
			</Routes>
			{/* <Body/> */}
		</div>
	);
}

export default App;
