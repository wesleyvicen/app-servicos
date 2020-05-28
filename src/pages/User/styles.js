import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;
export const Container2 = styled.View`
  flex: 1;
  padding: 20px;
  background: transparent;
`;

export const Box = styled(RectButton)`
  justify-content: flex-start;
  flex-direction: row;
  background: #edecec;
  height: 100px;
  width: 95%;
  border-radius: 10px;
  margin: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const Avatar = styled.Image`
  margin: 6% 0 0 5%;
  width: 15%;
  height: 50%;
  background: #eee;
  border-radius: 36px;
`;

export const Text = styled.Text`
  color: #1d3557;
  font-weight: bold;
`;

export const Text2 = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #1d3557;
  font-weight: 200;
`;

export const TextModal = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonContato = styled.TouchableOpacity`
  padding: 5%;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  margin: 10px;
`;

export const BottomHalfModal = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ViewContato = styled.View`
  background: white;
  height: 50%;
`;
