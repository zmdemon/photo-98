import styled from 'styled-components';

export const GridWrapper = styled.div`
  max-width: 800px;
  min-height: 500px;  
  gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
`;

export const PhotoCard = styled.div`
  padding: 15px;
  flex: 1 0 21%;
  display: flex;
  gap: 7px;
  flex-direction: column;
  border: 1px solid #f0f0f0;
  align-items: center;
  justify-content: center;  
`;
