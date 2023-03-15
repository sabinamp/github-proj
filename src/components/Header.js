
import styled from "styled-components";

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
	padding-top: 3rem;
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

const Header = ({ logo }) => (
	<AppHeader>
		<Logo src={logo} alt="logo" />
		<h1> My Github Portfolio </h1>
		<p></p>
	</AppHeader>
);

export default Header;
