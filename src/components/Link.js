import styled from 'styled-components';

const InnerLink = styled.a`
 color: #b3b492;
 padding-left: 0.4rem;
`;

const Link = ({ url, title }) => (
  <InnerLink
    href={url}
    target='_blank'
    rel='noopener noreferrer'>
    {title}
  </InnerLink>
);

export default Link;