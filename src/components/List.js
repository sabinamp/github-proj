import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
 `;

const ListItem = styled.li`
   display: flex;
   justify-content: space-between;
  `;

const BoldTxt = styled.span`
  font-weight: bold;
  font-color: #3c3d3c;   
 `;

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightGrey;
`;

const List = ({ items, title }) => (
    <>
      <Title>{title}</Title>
      <ListWrapper>
        {items.map(item =>
          <ListItem key={item.field} >
            <BoldTxt>{item.label}</BoldTxt>{item.value}
          </ListItem >
        )}
      </ListWrapper >
    </>
  );
  
  export default List;