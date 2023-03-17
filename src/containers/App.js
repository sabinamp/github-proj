import styled, { createGlobalStyle } from "styled-components";
import logo from "../media/github_png/GitHub-Mark-120px-plus.png";
import Header from "../components/Header";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppWrapper = styled.div`
width: 100%;
margin: 0rem;
text-align: center;
font-weight: 600;
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
		  <BrowserRouter>
			<GlobalStyle />
			<AppWrapper>
				<Header logo={logo} />				
				<Routes>
            		<Route path='/' element={<Profile userName='sabinamp' />} />
					<Route path='/projects' element= {<Projects userName='sabinamp' />} />
					<Route path='/projects/:name' element={<ProjectDetails userName='sabinamp' />}/>
            	</Routes>
			</AppWrapper>			
		</BrowserRouter>
		</>
	);
}

export default App;
