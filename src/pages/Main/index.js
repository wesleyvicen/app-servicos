import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import api from '../../services/api';

import {Container, Text, Avatar, Button, BackText} from './styles';

const styles = StyleSheet.create({
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

const Main = ({navigation}) => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    loadProfession();
  }, []);

  async function loadProfession() {
    try {
      setLoading(true);
      let response = await api.get('/profession/lists');
      setData(response.data);
      setIsFetching(false);
      setLoading(false);
      console.tron.log(response);
    } catch (error) {
      console.tron.log(error);
    }
  }

  function onRefresh() {
    setIsFetching(true), loadProfession();
  }

  const columns = 2;
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        showsVerticalScrollIndicator={false}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        renderItem={({item}) => {
          return (
            <>
              <Button
                style={styles.item}
                onPress={() =>
                  navigation.navigate('User', {
                    name: item.name,
                    id: item.id,
                  })
                }>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <>
                    <Avatar source={{uri: item.urlImage}} />
                    <BackText>
                      <Text></Text>
                    </BackText>
                    <Text>{item.name}</Text>
                  </>
                )}
              </Button>
            </>
          );
        }}
      />
    </Container>
  );
};

export default Main;
