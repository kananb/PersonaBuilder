import React, { useState } from 'react';

import {ReactComponent as ChevronIcon} from '../icons/chevron_icon.svg';


function Folder(props) {
	const [open, setOpen] = useState(false);
	const name = props.name || "Default";
	const setPersona = props.setPersona;
	const content = [];

	const clickFolder = () => {
		setOpen(!open);
	};
	
	for (let persona of props.content) {
		content.push(
			<div className={"persona" + (props.current === persona.id ? " current" : "")} onClick={() => setPersona({ id: persona.id, folder: name })}>
				<img className="personaThumbnail" src={persona.thumbnail} alt={persona.name + " thumbnail image"} />
				<span className="personaName">{persona.name}</span>
			</div>
		);
	}

	return (
		<div className={open ? "folder open" : "folder"}>
			<div className="nameWrapper" onClick={clickFolder}>
				<span className="name">{name}</span>
				<div className="collapseButton">
					<ChevronIcon />
				</div>
			</div>
			<div className="content">
				{ content }
			</div>
		</div>
	);
}

export default Folder;
