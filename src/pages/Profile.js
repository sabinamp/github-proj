import { useEffect, useState } from "react";
import styled from "styled-components";
import List from "../components/List";
import AppCLink from "../components/AppCLink";

const ProfileWrapper = styled.div`
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

const ProfileAvatar = styled.img`
	width: 180px;
`;

const linkedinURL = "https://www.linkedin.com/in/sabinamariab/";

const Profile = ({ userName }) => {
	const [loading, setLoading] = useState(false);
	const [profile, setProfile] = useState({});

	const items = [
		{ field: "Name", label: "Name ", value: profile.name },
		{ field: "Username ", label: "Username", value: profile.login },
		{ field: "Location", label: "Location ", value: profile.location },
		{
			field: "GitHub Html URL",
			label: "GitHub URL",
			value: <AppCLink url={profile.html_url} title={profile.html_url} />,
		},
		{
			field: "LinkedIn URL",
			label: "LinkedIn URL",
			value: <AppCLink url={linkedinURL} title={linkedinURL} />,
		},
	];

	useEffect(() => {
		async function fetchData() {
			const profile = await fetch(`https://api.github.com/users/${userName}`);
			const profileJSON = await profile.json();

			if (profileJSON) {
				setProfile(profileJSON);
				setLoading(false);
				/* 
              const repositories = await fetch(profileJSON.repos_url);
              const repositoriesJSON = await repositories.json();
              setRepos(repositoriesJSON); */
			}
		}

		fetchData();
	}, [userName]);

	return (
		<ProfileWrapper>
			<h2>My GitHub Profile</h2>
			{loading ? (
				<span>Loading...</span>
			) : (
				<div>
					<ProfileAvatar src={profile.avatar_url} alt={profile.name} />
					<List items={items} />
				</div>
			)}
		</ProfileWrapper>
	);
};

export default Profile;
