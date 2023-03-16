import styled from 'styled-components';

const AppLink = styled.a`
 color: #b3b492;
 padding-left: 0.4rem;
`;

const AppCLink = ({ url, title }) => (
  <AppLink
    href={url}
    target='_blank'
    rel='noopener noreferrer'>
    {title}
  </AppLink>
);

export default AppCLink;