import React from 'react';

import {ReactComponent as AddIcon} from '../icons/add_icon.svg';


function PersonaPage(props) {
	const info = props.info || {};
	const traits = [];

	for (let trait of info.traits) {
		traits.push(
			<div className="trait">
				{trait}
			</div>
		);
	}
	
	return (
		<div className="personaPage">
			<div className="arrow end previousButton">
				<svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.41421 2L20.799 20.3848M2 38.3848L21.5 19" stroke="#4B4B4B" stroke-width="3"/>
				</svg>
			</div>
			<div className="page">
				<div className="heading">
					<img src={info.picture} alt={info.name  + " picture"} className="picture" />
					<div className="headingText">
						<h2 className="name">{info.name}</h2>
						<div className="divider">&nbsp;</div>
						<h3 className="tagline">{info.tagline}</h3>
						<div className="traits">
							{ traits }
							<div className="trait addTrait"><AddIcon /></div>
						</div>
					</div>
				</div>
				<div className="content">
					
				</div>
			</div>
			<div className="arrow nextButton">
				<svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.41421 2L20.799 20.3848M2 38.3848L21.5 19" stroke="#4B4B4B" stroke-width="3"/>
				</svg>
			</div>
		</div>
	);
}

export default PersonaPage;
