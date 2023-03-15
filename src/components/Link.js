import styled from 'styled-components';

const InnerLink = styled.a`
 color: #61fbcd;
 padding-left: 0.2rem;
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