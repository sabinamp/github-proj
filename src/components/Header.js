
import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

const AppHeader = styled.div`
	background-color: #cbb8a9;
	min-height: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(14px + 2vmin);
	color: white;
	padding-bottom: 1rem;
`;

const Logo = styled.img`
	height: 100%;
	pointer-events: none;
	padding-top: 4rem;
	animation: App-logo-spin infinite 10s cubic-bezier(0.6, 0.7, 0.8, 1);
	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const NavLink = styled.a`
 color: #b3b492;
 margin-right: 1rem;
 text-decoration: none;
`;

const Navc= styled.nav`
	margin: 0.2rem 0rem;
	padding: 1rem;
	background-color: #d8d0c1;
`;

const Header = ({ logo }) => (
	<AppHeader>
		<Logo src={logo} alt="logo" />
		<h1> My Github Portfolio </h1>
		<Navc>
         <RouterLink to='/'> 
          <NavLink>About me</NavLink>
        </RouterLink>
        <RouterLink to='/projects'>
		<NavLink>Projects</NavLink>
        </RouterLink>
       </Navc>
	</AppHeader>
);

export default Header;
