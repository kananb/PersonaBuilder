import React from 'react';

import {ReactComponent as AddIcon} from '../icons/add_icon.svg';


function PersonaPage(props) {
	const persona = props.current;
	const scrollLeft = props.scrollLeft;
	const scrollRight = props.scrollRight;
	const setPersona = props.setPersona;

	const clickNext = () => {
		setPersona({increment: 1});
	};
	const clickPrevious = () => {
		setPersona({increment: -1});
	};

	const traits = [];
	for (let trait of persona.traits) {
		traits.push(
			<div className="trait">
				{trait}
			</div>
		);
	}

	const background = [], goals = [], frustrations = [];
	const fillList = (src, dst) => {
		for (let item of src) {
			dst.push(
				<li>
					{ item }
				</li>
			);
		}
	};
	fillList(persona.background, background);
	fillList(persona.goals, goals);
	fillList(persona.frustrations, frustrations);
	
	return (
		<div className="personaPage">
			<div className={"arrow previousButton" + (!scrollLeft ? " end" : "")} onClick={clickPrevious}>
				<svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.41421 2L20.799 20.3848M2 38.3848L21.5 19" stroke="#4B4B4B" stroke-width="3"/>
				</svg>
			</div>
			<div className="page">
				<div className="heading">
					<img src={persona.picture} alt={persona.name  + " picture"} className="picture" />
					<div className="headingText">
						<h2 className="name">{persona.name}</h2>
						<div className="divider">&nbsp;</div>
						<h3 className="tagline">{persona.tagline}</h3>
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
								{persona.demographic.age}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">SEX</span>
								{persona.demographic.sex}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">MARRIED</span>
								{persona.demographic.married ? "Yes" : "No"}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">KIDS</span>
								{persona.demographic.kids || "None"}
							</div>
						</div>
						<div className="longAnswerWrapper">
							<div className="demoAnswer">
								<span className="demoLabel">LOCATION</span>
								{persona.demographic.location.city + ", " + persona.demographic.location.state}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">OCCUPATION</span>
								{persona.demographic.occupation}
							</div>
							<div className="demoAnswer">
								<span className="demoLabel">INCOME</span>
								{"$" + persona.demographic.income.salary + (persona.demographic.income.benefits ? "+ Benefits" : "")}
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
						{'"' + persona.quote + '"'}
					</div>
				</div>
			</div>
			<div className={"arrow nextButton" + (!scrollRight ? " end" : "")} onClick={clickNext}>
				<svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.41421 2L20.799 20.3848M2 38.3848L21.5 19" stroke="#4B4B4B" stroke-width="3"/>
				</svg>
			</div>
		</div>
	);
}

export default PersonaPage;
