import './App.css';
import Sidebar from './components/Sidebar';
import PersonaPage from './components/PersonaPage';
import Infobar from './components/Infobar';

import './components/Sidebar.css';
import './components/Folder.css';
import './components/PersonaPage.css';
import './components/Infobar.css';
import { useState } from 'react';

function App() {
	const personaData = {
		"Technical": [
			{
				"id": "joshua_andrews",
				"name": "Joshua Andrews",
				"picture": "assets/joshua_andrews.png",
				"thumbnail": "assets/joshua_andrews.png",
				"tagline": "The bachelor with many hobbies",
				"traits": [
					"Analytical", "Thoguhtful", "Impatient",
					"Efficient", "Progressive",
				],
				"demographic": {
					"age": 41,
					"married": false,
					"sex": "male",
					"kids": 0,
					"location": {
						"city": "Los Angeles",
						"state": "CA",
					},
					"occupation": "Software Engineer",
					"income": {
						"salary": 190000,
						"benefits": true,
					},
				},
				"background": [
					"Enjoys the outdoors and loves to hike",
					"Wants to travel after retirement",
					"Loves to watch football in his spare time",
					"Worked in the food industry during college",
				],
				"goals": [
					"Provide a great user experience for clinicians on personal computer and mobile device browsers",
					"Ensure that ausers can accomplish their goals in as few clicks as possible",
					"Provide flexible reporting on patient outcomes",
				],
				"frustrations": [
					"Can't really use the application from a mobile device without changing the browser to work like it's on a PC",
					"More custom patient reporting options are needed",
					"Reporting page load times can be over 45 seconds",
				],
				"quote": "I would like to be able to see the medical details of all my clients with one easy click.",
			},
			{
				"id": "john_kudo",
				"name": "John Kudo",
				"picture": "assets/john_kudo.png",
				"thumbnail": "assets/john_kudo.png",
				"tagline": "He's a cool dude",
				"traits": [
					"Timely", "Active", "Humorous",
					"Passive", "Precise",
				],
				"demographic": {
					"age": 38,
					"married": true,
					"sex": "male",
					"kids": 2,
					"location": {
						"city": "Seatttle",
						"state": "WA",
					},
					"occupation": "Senior Software Engineer",
					"income": {
						"salary": 240000,
						"benefits": true,
					},
				},
				"background": [
					"You'll always find him outside",
					"Has never been into sports, but his in-laws love the Dodgers",
					"Has three big dogs that he never leaves at home unattended",
					"Started his career at 26 and has since been steadily climbing the ladder at his company",
				],
				"goals": [
					"Provide a great user experience for clinicians on personal computer and mobile device browsers",
					"Ensure that ausers can accomplish their goals in as few clicks as possible",
					"Provide flexible reporting on patient outcomes",
				],
				"frustrations": [
					"Can't really use the application from a mobile device without changing the browser to work like it's on a PC",
					"More custom patient reporting options are needed",
					"Reporting page load times can be over 45 seconds",
				],
				"quote": "I would like to be able to see the medical details of all my clients with one easy click.",
			},
			{
				"id": "alex_megos",
				"name": "Alex Megos",
				"picture": "assets/alex_megos.png",
				"thumbnail": "assets/alex_megos.png",
				"tagline": "One of the best (and hottest) climbers in the world",
				"traits": [
					"Powerful", "Active", "Loud",
					"Extreme", "Precise",
				],
				"demographic": {
					"age": 26,
					"married": false,
					"sex": "male",
					"kids": 0,
					"location": {
						"city": "Seatttle",
						"state": "WA",
					},
					"occupation": "Professional Rock Climber",
					"income": {
						"salary": 240000,
						"benefits": false,
					},
				},
				"background": [
					"You'll always find him outside",
					"Has never been into sports, but his in-laws love the Dodgers",
					"Has three big dogs that he never leaves at home unattended",
					"Started his career at 26 and has since been steadily climbing the ladder at his company",
				],
				"goals": [
					"Provide a great user experience for clinicians on personal computer and mobile device browsers",
					"Ensure that ausers can accomplish their goals in as few clicks as possible",
					"Provide flexible reporting on patient outcomes",
				],
				"frustrations": [
					"Can't really use the application from a mobile device without changing the browser to work like it's on a PC",
					"More custom patient reporting options are needed",
					"Reporting page load times can be over 45 seconds",
				],
				"quote": "I would like to be able to see the medical details of all my clients with one easy click.",
			},
		],
		"Non-technical": [
			{
				"id": "ferdinand_werthers",
				"thumbnail": "assets/default_persona.png",
				"name": "Ferdinand Werthers",
			},
			{
				"id": "holly_daniels",
				"thumbnail": "assets/default_persona.png",
				"name": "Holly Daniels",
			},
			{
				"id": "francisco_montoya",
				"thumbnail": "assets/default_persona.png",
				"name": "Francisco Montoya",
			},
		],
	};
	let folder = Object.keys(personaData)[0];
	const [current, setCurrent] = useState(0);

	const setPersona = (opts = {increment: 0, id: "", folder: ""}) => {
		if (opts.increment !== undefined) {
			setCurrent(Math.min(Math.max(current + opts.increment, 0), personaData[folder].length - 1));
		}
		else if (opts.id !== undefined) {
			folder = opts.folder || folder;
			for (let i = 0; i < personaData[folder].length; ++i) {
				if (personaData[folder][i].id == opts.id) {
					setCurrent(i);
					break;
				}
			}
		}
	};
	
	const folderData = [];
	for (let folderName of Object.keys(personaData)) {
		const folderContents = [];
		for (let persona of personaData[folderName]) {
			folderContents.push({
				"id": persona.id,
				"name": persona.name,
				"thumbnail": persona.thumbnail,
			});
		}
		folderData.push({
			"name": folderName,
			"content": folderContents,
		});
	}
	return (
		<div className="App">
			<Sidebar setPersona={setPersona} data={folderData} current={personaData[folder][current].id} />
			<PersonaPage setPersona={setPersona} current={personaData[folder][current]} scrollLeft={current > 0} scrollRight={current < personaData[folder].length - 1} />
			<Infobar />
		</div>
	);
}

export default App;
