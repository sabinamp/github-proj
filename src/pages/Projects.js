import { useEffect, useState } from "react";
import styled from "styled-components";
import List from "../components/List";
import AppCLink from "../components/AppCLink";
import { Link as RouterLink } from "react-router-dom";

const ProjWrapper = styled.div`
	width: auto;
	margin: 2rem auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	font-weight: 600;
`;

const Projects = ({ userName }) => {
	const [loading, setLoading] = useState(true);
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const repositories = await fetch(
				`https://api.github.com/users/${userName}/repos`
			);
			const repositoriesJSON = await repositories.json();

			if (repositoriesJSON) {
				setRepos(repositoriesJSON);
				setLoading(false);
			}
		}

		fetchData();
	}, [userName]);

	const projects = repos.map((repository) => ({
		field: repository.name,
		label: repository.name + ", Language: " + repository.language,
		value: (
			<div>
				<AppCLink url={repository.html_url} title="GitHub Repository HTML URL" />
                <RouterLink to={`/projects/${repository.name}`}
					title="GitHub Repository Details" > Project Details</RouterLink>
			
			</div>
		),
	}));

	return (
		<ProjWrapper>
			<h2>My GitHub Projects</h2>
			{loading ? (
				<span>Loading...</span>
			) : (
				<div>
					<List items={projects} />
				</div>
			)}
		</ProjWrapper>
	);
};

export default Projects;
