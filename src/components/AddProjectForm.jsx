import React, { useState } from "react";

function AddProjectForm({ onAddProject }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newProject = {
			id: Date.now(),
			title,
			description,
			link,
		};

		onAddProject(newProject);
		setTitle("");
		setDescription("");
		setLink("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Project Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<textarea
				placeholder="Project Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				required
			/>
			<input
				type="url"
				placeholder="Project Link"
				value={link}
				onChange={(e) => setLink(e.target.value)}
			/>
			<button type="submit">Add Project</button>
		</form>
	);
}

export default AddProjectForm;
