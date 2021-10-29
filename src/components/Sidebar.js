import React from 'react';
import Folder from './Folder';

import {ReactComponent as AddFolderIcon} from '../icons/add_folder_icon.svg';
import {ReactComponent as AddPersonaIcon} from '../icons/add_persona_icon.svg';
import {ReactComponent as ImportIcon} from '../icons/import_icon.svg';
import {ReactComponent as ExportIcon} from '../icons/export_icon.svg';
import {ReactComponent as CollapseIcon} from '../icons/collapse_icon.svg';

const folderData = [
	{
		"name": "Non-technical",
		"content": [

		],
	},
	{
		"name": "Technical",
		"content": [

		],
	},
	{
		"name": "Community Developer",
		"content": [

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