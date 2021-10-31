import React, { useState } from 'react';

import {ReactComponent as ChevronIcon} from '../icons/chevron_icon.svg';


function Folder(props) {
	const [open, setOpen] = useState(false);
	const name = props.name || "Default";
	const content = [];

	for (let persona of props.content) {
		content.push(
			<div className="persona">
				<img className="personaThumbnail" src={persona.thumbnail} alt={persona.name + " thumbnail image"} />
				<span className="personaName">{persona.name}</span>
			</div>
		);
	}

	const clickFolder = (e) => {
		setOpen(!open);
	};

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
