import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background: #e8eddf;
`;

export const Text = styled.Text`
  color: #e8eddf;
  font-weight: bold;
  bottom: 4%;
  position: absolute;
`;

export const BackText = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 20%;
  background: #333533;
  opacity: 0.5;
  border-bottom-start-radius: 8px;
  border-bottom-end-radius: 8px;
`;

export const ItemEmpty = styled.View`
  align-items: center;
  flex-grow: 1;
  margin: 4px;
  flex-basis: 0;
  background: transparent;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  background: #eee;
  border-radius: 8px;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #eb3b3d;
  height: 150px;
  width: 47%;
  border-radius: 8px;
  margin: 6px;
  border-color: #000;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;
