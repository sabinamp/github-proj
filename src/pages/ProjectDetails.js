//contains the logic for fetching an individual repository from GitHub API

import styled from "styled-components";
import AppCLink from "../components/AppCLink";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";

const ProjWrapper = styled.div`
	width: auto;
	margin: 2rem 2rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-around;
	text-align: left;
	font-weight: 600;
`;

const ProjectDetails = ({ userName }) => {
	const [loading, setLoading] = useState(false);
	const [project, setProject] = useState([]);
	const [languages, setLanguages] = useState([]);
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

				const repoLanguages = await fetch(result.languages_url);
				const repoLanguagesJSON = await repoLanguages.json();				
				const rLanguages = Object.entries(repoLanguagesJSON);
				console.log("Project Languages - rLanguages: "+rLanguages);
				//console.log("Project Languages: "+rLanguages.toString().replace('{','').replace('}', '').toString());
				const langArray = rLanguages.map(x => x[0]);
				console.log("languages array langArray: "+langArray);
				setLanguages(langArray);				
			}
		}
		if (userName && name) {
			fetchData();			
		}
	}, [userName, name]);

 	
	const details = [
		{
			field: "Project Name",
			label: "Project Name ",
			value: project.name
		},
		{
			field: "Project Full Name",
			label: "Project Full Name ",
			value: project.full_name
	   },
		{ field: "Visibility ", label: "Visibility", value: project.visibility },
		{
			field: "Project Description",
			label: "Project Description",
			value: (project.description ? project.description: "No description"),
		},
		{
			field: "GitHub URL",
			label: "GitHub URL",
			value: <AppCLink url={project.html_url} title="GitHub Repository HTML URL "/>,
		},
		/* {
			field: "Project Languages",
			label: "Project Languages",
			value: languages,
		}, */
		
	];

	const langList2 = languages.map( (x, index)=> {
		const entries = new Map([
		['field', 'Project Language '+index],
		['label', 'Project Language '+index],
		['value', x]
		]);

		const newObj=Object.fromEntries(entries);						
		return newObj;	 
	});
	

	return (
		<ProjWrapper>
			<h2>Project Name: {project.name}</h2>
			{loading ? (
				<span>Loading...</span>
			) : (
				<div>
					<List items={details} title="Project Details"/>
					<List items={langList2} title="Project Languages"/>
				</div>
			)}
		</ProjWrapper>
	);
};

export default ProjectDetails;
