//contains the logic for fetching an individual repository from GitHub API

import styled from "styled-components";
import AppCLink from "../components/AppCLink";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";

const ProjWrapper = styled.div`
	width: auto;
	margin: 1rem auto;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	font-weight: 600;
`;
const ProjectDetails = ({ userName }) => {
	const [loading, setLoading] = useState(false);
	const [project, setProject] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		async function fetchData() {
			const projdata = await fetch(
                `https://api.github.com/repos/${userName}/${name}`
			);
			const result = await projdata.json();
			if (result) {
				setProject(result);
				setLoading(false);
			}
		}
		if (userName && name) {
			fetchData();
		}
	}, [userName, name]);

	const details = [
		{ field: "Project Name", label: "Project Name ", value: project.name },
		{ field: "Visibility ", label: "Visibility", value: project.visibility },
		{
			field: "Allow Forking",
			label: "Allow Forking ",
			value: project.allow_forking,
		},
		{
			field: "GitHub HTML URL",
			label: "GitHub HTML URL",
			value: <AppCLink url={project.html_url} title={project.html_url} />,
		},
		{
			field: "Languages URL",
			label: "Languages URL",
			value: <AppCLink url={project.languages_url} title={project.languages_url} />,
		},
	];

	return (
		<ProjWrapper>
			<h2>Project Name: {project.name}</h2>
			{loading ? (
				<span>Loading...</span>
			) : (
				<div>
					<List items={details} />
				</div>
			)}
		</ProjWrapper>
	);
};

export default ProjectDetails;
