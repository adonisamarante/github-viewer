import styled from 'styled-components';
import NoAvatar from '../../resources/no-profile-picture.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledHeader = styled.header`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const UserInfoDiv = styled.div`
  background: #FFF;
  width: 50%;
  height: 250px;
  display: inline-flex;
  border: 2px solid #aaa;
  border-radius: 8px;
  margin-bottom: 14px;
`;

export const UserImgDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserDataDiv = styled.div`
  margin-top: 15px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const BioDiv = styled.div`
  width: 70%;
  overflow-y: auto;
`;

export const UserImg = styled.img.attrs((props) => ({ props }))`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;
UserImg.defaultProps = {
  src: NoAvatar,
};

export const ReposDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 50%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
`;
