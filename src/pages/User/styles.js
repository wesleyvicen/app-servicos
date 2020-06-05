import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
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
  background: white;
  height: 100px;
  width: 95%;
  border-radius: 10px;
  margin: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const Avatar = styled.Image`
  margin: 4% 0 0 5%;
  width: 20%;
  height: 70%;
  background: #eee;
  border-radius: 36px;
`;
export const Perfil = styled.Image`
  position: absolute;
  resize-mode: cover;
  width: 100%;
  height: 200%;
  background: #eee;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
export const ViewPerfil = styled.View`
  position: relative;
  width: 100%;
  height: 40%;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #eee;
`;

export const Text = styled.Text`
  color: #1d3557;
  font-weight: bold;
  font-family: Roboto;
`;

export const Text2 = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: Roboto;
  color: #1d3557;
  font-weight: 200;
`;

export const TextModal = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonContato = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 5%;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  margin: 5px 10px;
  background: white;
`;

export const BottomHalfModal = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ViewContato = styled.View`
  background: #f5f5f5;
  height: 60%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Description = styled.View`
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 5px 10px #888888;
  margin-bottom: 5px;
`;

export const TextDescription = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin: 10px 15px;
  color: #000;
  font-family: Roboto;
  font-size: 16px;
`;

export const TextConection = styled.Text`
  color: #000;
  font-family: Roboto;
  align-items: center;
`;

export const ViewConnection = styled.View`
  justify-content: center;
  align-items: center;
`;
