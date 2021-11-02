import './App.css';
import Sidebar from './components/Sidebar';
import PersonaPage from './components/PersonaPage';
import Infobar from './components/Infobar';

import './components/Sidebar.css';
import './components/Folder.css';
import './components/PersonaPage.css';
import './components/Infobar.css';

function App() {
	const personaInfo = {
		"name": "Joshua Andrews",
		"picture": "assets/joshua_andrews.png",
		"tagline": "The bachelor with many hobbies",
		"traits": [
			"Analytical", "Thoguhtful", "Impatient",
			"Efficient", "Progressive",
		],
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
	};
	
	return (
		<div className="App">
			<Sidebar />
			<PersonaPage info={personaInfo} />
			<Infobar />
		</div>
	);
}

export default App;
