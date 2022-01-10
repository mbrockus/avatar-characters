import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
			<nav >
				<ul>
					<li>
						<Link to='/Dashboard'>Home</Link>
					</li>
					<li>
						<Link to='/AirNation'>Air Nation</Link>
					</li>
					<li>
						<Link to='/WaterNation'>Water Nation</Link>
					</li>
					<li>
						<Link to='/EarthNation'>Earth Nation</Link>
					</li>
					<li>
						<Link to='/FireNation'>Fire Nation</Link>
					</li>
				</ul>
			</nav>
		);
}

export default Nav;