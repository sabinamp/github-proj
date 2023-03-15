import styled, { createGlobalStyle } from "styled-components";
import logo from "../media/github_png/GitHub-Mark-120px-plus.png";
import Header from "../components/Header";
import Profile from "../pages/Profile";

const AppWrapper = styled.div`
	text-align: center;
`;

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 `;
function App() {
	return (
		<>
			<GlobalStyle />
			<AppWrapper>
				<Header logo={logo} />
				<Profile userName="sabinamp" />
			</AppWrapper>
		</>
	);
}

export default App;
