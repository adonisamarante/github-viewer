import styled from 'styled-components';

export const CustomButton = styled.button`
  height: 35px;
  width: 100%;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
  font-weight: bolder;
  background: #C5EEC7;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;

  &:hover {
      filter: brightness(0.9);
  }
`;
