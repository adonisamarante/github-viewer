import styled from 'styled-components';
import GitLogo from '../../resources/Git-Icon-Black.png';

export const Container = styled.div`
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 20%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid #aaa;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  height: 35px;
  border-radius: 8px;
  padding: 0 16px;
  background: #FFF;
  border: 1px solid #a8a8b3;
  outline: none;
`;

export const Logo = styled.img.attrs({ src: `${GitLogo}` })`
  height: 90px;
  width: 90px;
  margin: 0px 0px 35px 0px;
`;
