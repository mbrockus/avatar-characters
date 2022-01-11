import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {
    return (
			<nav >
				<ul>
					<li>
						<Link to='/Dashboard'>Home</Link>
					</li>
					<li className='airNav'>
						<Link to='/AirNation'>Air Nation</Link>
					</li>
					<li className='waterNav'>
						<Link to='/WaterNation'>Water Nation</Link>
					</li>
					<li className='earthNav'> 
						<Link to='/EarthNation'>Earth Nation</Link>
					</li>
					<li className='fireNav'>
						<Link to='/FireNation'>Fire Nation</Link>
					</li>
				</ul>
			</nav>
		);
}

export default Nav;