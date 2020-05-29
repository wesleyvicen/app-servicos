import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {StyleSheet} from 'react-native';

import {Text, Container, View} from './styles';

const styles = StyleSheet.create({
  svg: {
    marginTop: '-12%',
  },
  text: {
    padding: '5%',
  },
});

const menssageInitial = () => {
  return (
    <>
      <Container>
        <View style={styles.text}>
          <Text>Olá, Escolha uma das opções abaixo</Text>
        </View>
        <Svg viewBox="0 0 1440 320" style={styles.svg}>
          <Path
            fill="#e63946"
            fill-opacity="1"
            d="M0,224L48,192C96,160,192,96,288,74.7C384,53,480,75,576,96C672,117,768,139,864,144C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></Path>
        </Svg>
      </Container>
    </>
  );
};

export default menssageInitial;
