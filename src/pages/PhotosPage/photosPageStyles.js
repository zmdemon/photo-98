import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  padding: 20px 65px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilterMenuWrapper = styled.div`
  width: 150px;
  padding: 10px;
  margin-bottom: 15px;

  border: 1px solid slategray;
  border-radius: 5px;

  position: fixed;
  top: 10%;
  left: 30px;

  @media (max-width: 1200px) {
    position: static;

  }
`;

