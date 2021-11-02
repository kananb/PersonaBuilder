import React from 'react';

import {ReactComponent as AddIcon} from '../icons/add_icon.svg';


function PersonaPage(props) {
	const info = props.info || {};
	const traits = [];
	const background = [], goals = [], frustrations = [];

	for (let trait of info.traits) {
		traits.push(
			<div className="trait">
				{trait}
			</div>
		);
	}

	for (let item of info.background) {
		background.push(
			<li>
				{item}
			</li>
		);
	}
	for (let goal of info.goals) {
		goals.push(
			<li>
				{goal}
			</li>
		);
	}
	for (let frustration of info.frustrations) {
		frustrations.push(
			<li>
				{frustration}
			</li>
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
					<div className="infoBox demographic">
						<div className="shortAnswerWrapper">
							<div className="demoAnswer">
								<span className="demoLabel">AGE</span>
								{info.demographic.age}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">SEX</span>
								{info.demographic.sex}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">MARRIED</span>
								{info.demographic.married ? "Yes" : "No"}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">KIDS</span>
								{info.demographic.kids || "None"}
							</div>
						</div>
						<div className="longAnswerWrapper">
							<div className="demoAnswer">
								<span className="demoLabel">LOCATION</span>
								{info.demographic.location.city + ", " + info.demographic.location.state}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">OCCUPATION</span>
								{info.demographic.occupation}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">INCOME</span>
								{"$" + info.demographic.income.salary + (info.demographic.income.benefits ? "+ Benefits" : "")}
							</div>
						</div>
					</div>
					<div className="infoBox background">
						<span className="infoLabel">BACKGROUND</span>
						<ul className="infoList">
							{background}
						</ul>
					</div>
					<div className="infoBox goals">
						<span className="infoLabel">GOALS</span>
						<ul className="infoList">
							{goals}
						</ul>
					</div>
					<div className="infoBox frustrations">
						<span className="infoLabel">FRUSTRATIONS</span>
						<ul className="infoList">
							{frustrations}
						</ul>
					</div>
					<div className="infoBox quote">
						<span className="infoLabel">QUOTE</span>
						{'"' + info.quote + '"'}
					</div>
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
