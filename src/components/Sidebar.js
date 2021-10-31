import React from 'react';
import Folder from './Folder';

import {ReactComponent as AddFolderIcon} from '../icons/add_folder_icon.svg';
import {ReactComponent as AddPersonaIcon} from '../icons/add_persona_icon.svg';
import {ReactComponent as ImportIcon} from '../icons/import_icon.svg';
import {ReactComponent as ExportIcon} from '../icons/export_icon.svg';
import {ReactComponent as CollapseIcon} from '../icons/collapse_icon.svg';

const folderData = [
	{
		"name": "Technical",
		"content": [
			{
				"id": "joshua_andrews",
				"thumbnail": "assets/default_persona.png",
				"name": "Joshua Andrews",
			},
			{
				"id": "john_kudo",
				"thumbnail": "assets/default_persona.png",
				"name": "John Kudo",
			},
			{
				"id": "alex_megos",
				"thumbnail": "assets/default_persona.png",
				"name": "Alexander Megos",
			},
		],
	},
	{
		"name": "Non-technical",
		"content": [
			{
				"id": "jane_doe",
				"thumbnail": "assets/default_persona.png",
				"name": "Jane Doe",
			},
			{
				"id": "ferdinand_werthers",
				"thumbnail": "assets/default_persona.png",
				"name": "Ferdinand Werthers",
			},
		],
	},
	{
		"name": "Community Developer",
		"content": [
			{
				"id": "holly_daniels",
				"thumbnail": "assets/default_persona.png",
				"name": "Holly Daniels",
			},
			{
				"id": "yves_fourtier",
				"thumbnail": "assets/default_persona.png",
				"name": "Yves Fourtier",
			},
			{
				"id": "francisco_montoya",
				"thumbnail": "assets/default_persona.png",
				"name": "Francisco Montoya",
			},
		],
	},
];


function Sidebar() {
	const folders = [];
	for (let data of folderData) {
		folders.push(
			<Folder name={data.name} content={data.content} />
		);
	}
	
	return (
		<div className="sidebar">
			<div className="logoWrapper">
				<h1 className="logo">PERSONA BUILDER</h1>
			</div>
			<h2 className="sidebarLabel">MY PERSONAS</h2>

			<div className="optionsWrapper">
				<div className="options">
					<div className="optionGroup">
						<div className="optionButton"><AddFolderIcon /></div>
						<div className="optionButton"><AddPersonaIcon /></div>
					</div>
					<div className="divider">&nbsp;</div>
					<div className="optionGroup">
						<div className="optionButton"><ImportIcon /></div>
						<div className="optionButton"><ExportIcon /></div>
						<div className="optionButton"><CollapseIcon /></div>
					</div>
				</div>
			</div>

			<div className="folders">
				{ folders }
			</div>
		</div>
	);
}

export default Sidebar;
